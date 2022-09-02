import overallModel from '../models/overall-model.js';
import particalModel from '../models/partical-model.js';
import resultModel from '../models/result-model.js';

class StatisticService {
  async createPartical(particalReq) {
    for (let elem of particalReq) {
      const { country, city, name, location, students } = elem;
      const { overallStudents } = await overallModel.findOne({ country });
      const difference = [];

      for (let elem of students) {
        difference.push(elem.number - overallStudents);
      }

      await particalModel.create({
        longitude: location.ll[0],
        latitude: location.ll[1],
        country,
        city,
        name,
        location,
        students,
        difference
      });
    }
    return;
  }

  async createOverall(overallReq) {
    for (let elem of overallReq) {
      const { country, overallStudents } = elem;
      await overallModel.create({
        country,
        overallStudents
      });
    }
    return;
  }

  async createResult(overallReq) {
    const finalResult = [];
    for (let elem of overallReq) {
      const allDiffs = [];
      const longitude = [];
      const latitude = [];
      const allCountry = await particalModel.find({ country: elem.country });

      for (let country of allCountry) {
        for (let diff of country.difference) {
          allDiffs.push(diff);
        }
        longitude.push(country.longitude);
        latitude.push(country.latitude);
      }

      const result = await resultModel.create({
        _id: elem.country,
        allDiffs,
        count: allCountry.length,
        longitude,
        latitude
      });
      finalResult.push(result);
    }
    return finalResult;
  }
}

export default new StatisticService();
