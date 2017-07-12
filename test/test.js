const WidgetCollection = require('../src/WidgetCollection.js').WidgetCollection
const Widget = require('../src/WidgetCollection.js').Widget
const assert = require('assert')

describe('Basic Widget Test', function(){

  let w1 = new Widget('fred', 1)
  let w2 = new Widget('wally', 2)
  let w3 = new Widget('wanda', 3, 'this is a test description')

  let wc = new WidgetCollection([w1,w2,w3]);

  it('should build a basic widget collection', function(done){

        assert(wc.size, 3)
        assert(wc.get(0).name, 'fred')

        done()

    })

    it('should push a new widget onto the collection', function(done){
        let w4 = new Widget('william', 4, 'mister citrus');

        try{
          wc.push(w4)
          assert(wc.get(wc.size() - 1).name, 'william')
          done()
        }catch(e){
          done(e)
        }
    })

    it('should check type when pushing a new element onto the collection', function(done){

      let size_init = wc.size();

        try{
          wc.push('this is not a widget')
          done(new Error('Manage to push string into collection'))
        }catch(e){
            assert(wc.size(), size_init)
            done();
        }

    })

    it('should pop the last element from the collection', function(done){

      let size_init = wc.size();
      wc.push(new Widget('winifred', 5, 'whinny fred'))

      let w = wc.pop;
      assert(w.name, 'winifred')
      assert(wc.size(), size_init)
      done()

    })

    it('should catch index out of bounds on get', function(done){

      try{
        let w = wc.get(wc.size() + 1)
        done(new Error('Managed to adress index at size + 1'))
      }catch(e){
        done();
      }

    })

})
