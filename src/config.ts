import MainScene from './scenes/MainScene';
import { settings } from './globals';
import Level1 from './scenes/Level1'
import Level2 from './scenes/Level2';
import Level3 from './scenes/Level3';
import LevelEditor from './scenes/LevelEditor';
import Level4 from './scenes/Level4';
import Level5 from './scenes/Level5';
import Level6 from './scenes/Level6';
import Level7 from './scenes/Level7';
import Level8 from './scenes/Level8';
import Level9 from './scenes/Level9';
const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    backgroundColor: "#292929",
    physics: {
      default: 'arcade',
      arcade: {
        debug: true,
      },
    },
    scene: [LevelEditor,Level7,Level1,Level2,Level3,Level4,Level6,Level5,Level8,Level9],
  };

export default config;