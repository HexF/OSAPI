const resolvers = {
  Query: {
    async allOperatingSystems(root, args, {models}) {
      return models.OperatingSystem.findAll();
    },

    async operatingSystem(root, {id}, {models}) {
      return models.OperatingSystem.findById(id);
    },

    async operatingSystemByNameAndVersion(root, {name, version}, {models}) {
      return models.OperatingSystem.findOne({
        where: {version: version, name: name},
      });
    },

    async operatingSystemsByName(root, {name}, {models}) {
      return models.OperatingSystem.findAll({
        where: {name: args.name},
      });
    },

    async download(root, {id}, {models}) {
      return models.Download.findById(id);
    },
    async downloads(root, args, {models}) {
      if (args.type) {
        return findAll({
          where: {OperatingSystemID: args.osId, type: args.type},
        });
      }
      return findAll({
        where: {OperatingSystemID: args.osId},
      });
    },
    async downloadBest(root, args, {models}) {
      const r = models.Download.findAll({
        where: {
          OperatingSystemID: args.os.id,
          type: args.type,
        },
      });
      // TODO: Implement code to find nearest to location
      return r[0];
    },
  },
  Mutation: {
    async createOperatingSystem(root, {name, version}, {models}) {
      return models.OperatingSystem.create({
        name,
        version,
      });
    },

    async createDownload(
        root,
        {osId, type, signature, location, url},
        {models},
    ) {
      return models.Download.create({
        type,
        signature,
        location,
        url,
        OperatingSystemID: osId,
      });
    },
  },
  Download: {
    async operatingSystem(download) {
      return download.getOperatingSystem();
    },
  },
  OperatingSystem: {
    async downloads(operatingSystem) {
      return operatingSystem.getDownloads();
    },
  },
};
module.exports = resolvers;
