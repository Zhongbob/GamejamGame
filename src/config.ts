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
import StartScene from './scenes/StartScene';
import Level10 from './scenes/Level10';
import Level11 from './scenes/Level11';
import Level12 from './scenes/Level12';
import Level13 from './scenes/Level13';
import Level14 from './scenes/Level14';
import Level15 from './scenes/Level15';
import Level16 from './scenes/Level16';
import Level17 from './scenes/Level17';
import Level18 from './scenes/Level18';
import Level19 from './scenes/Level19';
import Level20 from './scenes/Level20';
import WinScene from './scenes/WinScene';
import LevelSelectionScene from './scenes/LevelSelect';
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
    scene: [StartScene,LevelSelectionScene ,WinScene,Level5,Level1,Level7,Level2,Level3,Level4,Level6,Level8,Level9,Level10,Level11,Level12,Level13,Level14,Level15,Level16,Level17,Level18,Level19,Level20
    ],
  };

export default config;