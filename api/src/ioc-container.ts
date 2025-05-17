import { IocContainer } from "tsoa";
import { container } from "tsyringe";

export const iocContainer: IocContainer = {
  get: <T>(controllerClass: new (...args: any[]) => T): T => {
    return container.resolve<T>(controllerClass);
  },
};