"use strict";

const { ErrorCode } = require("../../error-handler/errorCode");
const { ErrorException } = require("../../error-handler/ErrorException");

class groupDAO {
  group;

  constructor(sequelize) {
    this.group = sequelize.models.group;
  }

  async createGroup(groupName){
    await this.group.sync();
    const createdGroup = await this.group.create({
      name: groupName,
    });

    if (!createdGroup) {
      throw new ErrorException(ErrorCode.CantCreate);
    }

    return createdGroup;
  }

  async getGroups() {
    await this.group.sync();
    return await this.group.findAll();
  }


}

module.exports = groupDAO;
