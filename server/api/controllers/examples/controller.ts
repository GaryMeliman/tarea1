import ExamplesService from '../../services/examples.service';
import { Request, Response } from 'express';

export class Controller {
  all(req: Request, res: Response): void {
    ExamplesService.all().then((r) => res.json(r));
  }
}
export default new Controller();
