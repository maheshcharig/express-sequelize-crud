"use strict";

var _User = require("../../tests/User");

var _ = require(".");

describe('sequelizeCrud', () => {
  it('defines all actions but search', async () => {
    const actions = (0, _.sequelizeCrud)(_User.User);
    expect(actions.create).toBeDefined();
    expect(actions.destroy).toBeDefined();
    expect(actions.update).toBeDefined();
    expect(actions.getList).toBeDefined();
    expect(actions.getOne).toBeDefined();
  });
});