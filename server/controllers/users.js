const User = require('../models').User;
const Organization = require('../models').Organization;

module.exports = {
  async signup(req, res) {
      try {
        const {
            orgId,
            orgName,
            email
        } = req.body;

        // TODO validate email with REGEX

        let org;
        if (orgId) {
            org = await Organization.findById(orgId);
            if (!org) {
                return res.status(404).send(`orgId ${orgId} not found!`);
            }
        } else {
            org = await Organization.create({ name: orgName });
        }

        const user = await User
          .create({
            email,
            orgId: org.id,
          });

        res.status(201).send(user);
      } catch (error) {
          res.status(400).send(error);
      }
  },

  destroy(req, res) {
      // TODO delete the user
      // TODO if user is the last user of the org, delete the org
  }
}
