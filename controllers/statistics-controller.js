import statisticsService from '../service/statistics-service.js';

class StatisticsController {
  async create(req, res) {
    try {
      const { first, second } = req.files;
      const particalReq = JSON.parse(first.data.toString());
      const overallReq = JSON.parse(
        second.data
          .toString()
          .replaceAll(`'`, `"`)
          .replaceAll('country', '"country"')
      );

      await statisticsService.createOverall(overallReq);
      await statisticsService.createPartical(particalReq);
      const resultData = await statisticsService.createResult(overallReq);

      return res.json(resultData);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new StatisticsController();
