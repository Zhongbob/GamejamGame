import 'phaser';

export default class WinScene extends Phaser.Scene {
    constructor() {
        super('Win');
    }

    preload() {
        // Preload assets if needed
    }

    create() {
        // Add background
        this.add.rectangle(
            this.scale.width / 2,
            this.scale.height / 2,
            this.scale.width,
            this.scale.height,
            0x000000
        ); // Black background

        // Add "You Win!" text
        const winText = this.add.text(
            this.scale.width / 2,
            this.scale.height / 3,
            'You Win!',
            {
                fontFamily: '"Press Start 2P"',
                fontSize: '32px',
                color: '#FFD700', // Gold color
                align: 'center',
            }
        ).setOrigin(0.5);

        // Add "Play Again" button
        const playAgainButton = this.add.text(
            this.scale.width / 2,
            this.scale.height / 2,
            'Play Again',
            {
                fontFamily: '"Press Start 2P"',
                fontSize: '16px',
                color: '#ffffff',
                backgroundColor: '#007BFF', // Blue background
                padding: { x: 20, y: 10 },
            }
        ).setOrigin(0.5).setInteractive();

        // Add "Main Menu" button
        const mainMenuButton = this.add.text(
            this.scale.width / 2,
            this.scale.height / 2 + 50,
            'Main Menu',
            {
                fontFamily: '"Press Start 2P"',
                fontSize: '16px',
                color: '#ffffff',
                backgroundColor: '#28A745', // Green background
                padding: { x: 20, y: 10 },
            }
        ).setOrigin(0.5).setInteractive();

        // Play Again button interactivity
        playAgainButton.on('pointerup', () => {
            this.scene.start('level1'); // Replace 'level1' with your desired starting level
        });

        // Main Menu button interactivity
        mainMenuButton.on('pointerup', () => {
            this.scene.start('StartScene'); // Replace 'StartScene' with your main menu scene
        });

        // Add hover effects
        const addHoverEffect = (button: Phaser.GameObjects.Text, hoverColor: string) => {
            const originalColor = button.style.backgroundColor;
            button.on('pointerover', () => {
                button.setStyle({ backgroundColor: hoverColor });
            });
            button.on('pointerout', () => {
                button.setStyle({ backgroundColor: originalColor });
            });
        };

        addHoverEffect(playAgainButton, '#0056b3'); // Darker blue on hover
        addHoverEffect(mainMenuButton, '#1e7e34'); // Darker green on hover
    }
}
