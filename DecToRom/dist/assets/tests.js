'use strict';

define('dec-to-rom/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/convert-comp.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/convert-comp.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/convert-comp.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/convert-comp.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });
});
define('dec-to-rom/tests/integration/components/covert-comp-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | covert-comp', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "woVWZKYS",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"covert-comp\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "mNstSv7C",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"covert-comp\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('dec-to-rom/tests/test-helper', ['dec-to-rom/app', 'dec-to-rom/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('dec-to-rom/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('integration/components/covert-comp-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/covert-comp-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/convert-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/convert-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/convert-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/convert-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/convert-comp-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/convert-comp-test.js should pass ESLint\n\n');
  });
});
define('dec-to-rom/tests/unit/controllers/convert-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | convert', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:convert');
      assert.ok(controller);
    });
  });
});
define('dec-to-rom/tests/unit/models/convert-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | convert', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = Ember.run(() => store.createRecord('convert', {}));
      assert.ok(model);
    });
  });
});
define('dec-to-rom/tests/unit/routes/convert-comp-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | convert', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:convert');
      assert.ok(route);
    });
  });
});
define('dec-to-rom/config/environment', [], function() {
  var prefix = 'dec-to-rom';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('dec-to-rom/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
