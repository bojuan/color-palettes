import { bodyParser, create, defaults, router } from 'json-server';
import { readFileSync } from 'fs';

const server = create();
const routerJsonServer = router('server/db.json');
const middlewares = defaults();

server.use(bodyParser);
server.use(middlewares);

server.get('/color-palettes', (_, res) => {
  const data = readFileSync('server/db.json', 'utf-8');
  const colorPalettes = JSON.parse(data)?.palettes ?? [];
  res.json(colorPalettes);
});

server.use(routerJsonServer);
server.listen(3100, () => {
  console.log('JSON Server is running');
});
