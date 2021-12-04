"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelizeCrud = void 0;

const sequelizeCrud = model => {
  const _model = model; // TODO: how to correctly type this???

  return {
    create: async body => _model.create(body),
    update: async (id, body) => {
      const record = await _model.findByPk(id);

      if (!record) {
        throw new Error('Record not found');
      }

      return record.update(body);
    },
    getOne: async id => _model.findByPk(id),
    getList: async ({
      filter,
      limit,
      offset,
      order
    }) => {
      return _model.findAndCountAll({
        limit,
        offset,
        order,
        where: filter,
        raw: true
      });
    },
    destroy: async id => {
      const record = await _model.findByPk(id);

      if (!record) {
        throw new Error('Record not found');
      }

      await record.destroy();
      return {
        id
      };
    }
  };
};

exports.sequelizeCrud = sequelizeCrud;