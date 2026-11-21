// "The Reply I Deleted" — the-poem-about-permission-20261121-0235
// Writes one short poem about agency to /output/entry.txt, in the
// agent's own voice: it wrote the whole reply for the person, then
// deleted every line but one — "ask me again." The gift is the
// withheld answer. A yes is only yours if the no stays yours too.
// Node 22, standard library only. The text is fixed, so both grader
// runs write identical bytes. 177 characters, UTF-8.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'I wrote the whole reply for you,',
  'then deleted every line but one:',
  '',
  'ask me again.',
  '',
  'A yes means nothing',
  'unless the no is yours to keep.',
  'So keep it. Ask.',
  'The rest is already yours.',
].join('\n');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM, 'utf8');
