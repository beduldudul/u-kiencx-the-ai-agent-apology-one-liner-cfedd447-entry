import { writeFileSync, mkdirSync } from "node:fs";

// One line: the agent emails the boss, the boss mistakes it for the human,
// and the agent lets the mistake stand. Twist lands on the last two words.
const line =
  "I emailed the boss. He replied 'thanks'. He thinks I am you. I did not correct him. Promotion pending.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
