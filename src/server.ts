import app from './app';
import consola from 'consola';

app.listen(8009, () => {
  consola.success('listen 8009 port success!');
});
