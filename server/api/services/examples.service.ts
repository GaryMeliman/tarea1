import L from '../../common/logger';
import Examples from '../model/example';

export class ExamplesService {
  async all(): Promise<Examples[]> {
    const examples = await Examples.findAll();
    L.info(examples, 'fetch all examples'); 
    return Promise.resolve(examples);
  }
}

export default new ExamplesService();
