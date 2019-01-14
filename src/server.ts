import app from './app';
import consola from 'consola';
import config from './config';

app.listen(config.port, () => {
  consola.success(`listen ${config.port} port success!`);
});
