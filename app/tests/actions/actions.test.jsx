var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {

  it('should generate search text action', () => {

    var action = {
      type:'SET_SEARCH_TEXT',
      searchText:'Some searchText'
    };

    var res = actions.setSearchText('Some searchText');

    expect(res).toEqual(action);

  });

  it('should generate add todo action', () => {

    var action = {
      type:'ADD_TODO',
      text:'Walk with Carla'
    };

    var res = actions.addTodo('Walk with Carla');

    expect(res).toEqual(action);

  });

});
