// ##############################################################
// REQUIRE MODULES
// ##############################################################
const pool = require('../services/db');

// ##############################################################
// DEFINE SELECT TREES BY USER ID
// ##############################################################
module.exports.selectTreesByUserId = (data, callback) => {
    const SQLSTATEMENT = `
    SELECT * FROM Tree WHERE user_id = ?;`;
    const VALUES = [data.userId];
    
    pool.query(SQLSTATEMENT, VALUES, callback);
};

// ##############################################################
// DEFINE WATER TREE BY USER ID
// ##############################################################
module.exports.waterTreeByUserId = (data, callback) => {
    const SQLSTATEMENT = `
    UPDATE Tree SET watered_on = NOW() WHERE user_id = ? AND id = ?;`;
    const VALUES = [data.userId, data.treeId];
    
    pool.query(SQLSTATEMENT, VALUES, callback);
};

// ##############################################################
// DEFINE MODEL FOR GET AVERAGE AGE OF TREES OWNED BY USER
// ##############################################################
module.exports.selectAverageAgeOfTreesOwnedByUser = (data, callback) => {
    const SQLSTATEMENT = `
    SELECT AVG(age) AS averageAge, COUNT(id) AS numberOfTrees 
    FROM Tree 
    WHERE user_id = ?;
    `;
    const VALUES = [data.userId];
    
    pool.query(SQLSTATEMENT, VALUES, callback);
}