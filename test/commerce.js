'use strict';
var test = require('tape');
var jort = require('jort');

var LegacySDK = require('../');
var OrderClient = require(
  '../clients/commerce/order');

var FiddlerProxy = require('../plugins/fiddler-proxy');

var testContext;
var testOrderService = function(assert, client) {
  assert.plan(3);
  client.getOrders({ pageSize: 3 }).then(function(result) {
    assert.ok(result, 'result delivered');
    assert.equal(result.pageSize, 3, 'pagesize as expected');
    assert.equal(result.items.length, 3, 'items as expected');
  }).catch(assert.fail);
}

var runTests;

if (process.env.MOZU_TEST_LIVE) {
  try {
    testContext = require('../mozu.test.config.json');
  } catch(e) {
    testContext = {};
  }
  runTests = function(client) {
    return function(assert) {
      testOrderService(assert, client);
    }
  }
} else {
  runTests = function(client) {
    return function(assert) {
      jort({
        pageSize: 3,
        items: [
          {},
          {},
          {}
        ]
      }).then(function(serviceUrl) {
        client.context.tenantPod = serviceUrl;
        testOrderService(assert, client);
      });
    }
  };
}

test('commerce/orders returns Orders from CommerceRuntime.GetOrders',
    runTests(new OrderClient({
      context: testContext,
      plugins: [FiddlerProxy]
    })));

test('legacy client access still returns Products',
    runTests(LegacySDK.client(testContext, { plugins: [FiddlerProxy] })
            .commerce().order()));
