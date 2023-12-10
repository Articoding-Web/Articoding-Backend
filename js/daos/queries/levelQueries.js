"use strict";

module.exports = {
  createLevel: `INSERT INTO level(user, category, title, data) VALUES(?, ?, ?, ?)`,

  getLevelById: `SELECT * FROM level WHERE id = ?`,

  getLevelsByCategory: `SELECT*  FROM level WHERE category like ?`,

  getCommunityLevels: `SELECT * FROM level JOIN user ON level.user = user.id WHERE user.role <> "Admin"`,
};
