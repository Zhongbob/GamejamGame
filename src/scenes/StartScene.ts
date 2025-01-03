import 'phaser';

export default class StartScene extends Phaser.Scene {
    public offsetX: number;
    public offsetY: number;
    private bgm: Phaser.Sound.BaseSound;

    constructor() {
        super('StartScene');
    }

    preload() {
        // Load background music
        this.load.audio('bgm', 'assets/title.mp3');
        this.load.audio('game', 'assets/game.mp3'); // Load game music
    }

    create() {
        // Play background music
        this.bgm = this.sound.add('bgm', { loop: true });
        this.bgm.play();

        // Calculate offsets
        this.offsetX = (this.scale.width - 800) / 2;
        this.offsetY = (this.scale.height - 600) / 2;

        // Add background
        this.add.rectangle(
            400 + this.offsetX,
            300 + this.offsetY,
            800,
            600,
            0x202020
        ); // Dark gray background

        // Add title text
        const titleText = this.add.text(
            400 + this.offsetX,
            175 + this.offsetY,
            'Last One Left',
            {
                fontSize: '32px',
                fontFamily: '"Press Start 2P"',
                color: '#ffffff',
                align: 'center',
            }
        ).setOrigin(0.5);

        // Add "Start Game" button
        const startButton = this.add.text(
            400 + this.offsetX,
            275 + this.offsetY,
            'Start Game',
            {
                fontSize: '24px',
                fontFamily: '"Press Start 2P"',
                color: '#ffffff',
                backgroundColor: '#007BFF',
                padding: { x: 20, y: 10 },
            }
        ).setOrigin(0.5).setInteractive();

        // Add "Level Selection" button
        const levelSelectButton = this.add.text(
            400 + this.offsetX,
            350 + this.offsetY,
            'Level Selection',
            {
                fontSize: '24px',
                fontFamily: '"Press Start 2P"',
                color: '#ffffff',
                backgroundColor: '#28A745',
                padding: { x: 20, y: 10 },
            }
        ).setOrigin(0.5).setInteractive();

        // Button interactivity
        startButton.on('pointerup', () => {
            this.fadeOutSceneAndMusic('level1', 'game'); // Transition to level1
        });

        levelSelectButton.on('pointerup', () => {
            this.fadeOutSceneAndMusic('LevelSelectionScene'); // Transition to LevelSelectScene
        });

        // Button hover effect
        const addHoverEffect = (button: Phaser.GameObjects.Text, hoverColor: string) => {
            const originalColor = button.style.backgroundColor;
            button.on('pointerover', () => {
                button.setStyle({ backgroundColor: hoverColor });
            });
            button.on('pointerout', () => {
                button.setStyle({ backgroundColor: originalColor });
            });
        };

        addHoverEffect(startButton, '#0056b3'); // Darker blue hover effect
        addHoverEffect(levelSelectButton, '#1e7e34'); // Darker green hover effect
    }

    private fadeOutSceneAndMusic(nextScene: string, nextMusicKey?: string) {
        // Fade out the current music
        this.tweens.add({
            targets: this.bgm,
            volume: 0,
            duration: 1000, // 1 second fade-out
            onComplete: () => {
                this.bgm.stop(); // Stop current music once faded out
            },
        });

        // Fade out the scene
        this.cameras.main.fadeOut(1000, 0, 0, 0); // 1 second fade-out to black
        this.cameras.main.once('camerafadeoutcomplete', () => {

            // Start the next scene
            this.scene.start(nextScene);
        });
    }
}
