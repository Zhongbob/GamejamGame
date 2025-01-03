import 'phaser';

export default class LevelSelectionScene extends Phaser.Scene {
    constructor() {
        super('LevelSelectionScene');
    }

    preload() {
        // Preload any assets if needed
    }

    create() {
        // Add background
        this.add.rectangle(
            this.scale.width / 2,
            this.scale.height / 2,
            this.scale.width,
            this.scale.height,
            0x202020
        ); // Dark gray background

        // Add title text
        this.add.text(
            this.scale.width / 2,
            50,
            'Select a Level',
            {
                fontFamily: '"Press Start 2P"',
                fontSize: '24px',
                color: '#ffffff',
                align: 'center',
            }
        ).setOrigin(0.5);

        // Create level buttons
        const levelsPerRow = 5; // Number of levels per row
        const buttonSize = 80; // Size of each button
        const buttonPadding = 20; // Padding between buttons
        const startX = this.scale.width / 2 - ((levelsPerRow - 1) * (buttonSize + buttonPadding)) / 2;
        const startY = 150;

        for (let i = 0; i < 20; i++) {
            const row = Math.floor(i / levelsPerRow);
            const col = i % levelsPerRow;

            const x = startX + col * (buttonSize + buttonPadding);
            const y = startY + row * (buttonSize + buttonPadding);

            const levelButton = this.add.text(
                x,
                y,
                `L${i + 1}`,
                {
                    fontFamily: '"Press Start 2P"',
                    fontSize: '16px',
                    color: '#ffffff',
                    backgroundColor: '#007BFF', // Blue button
                    padding: { x: 10, y: 10 },
                    align: 'center',
                }
            ).setOrigin(0.5).setInteractive();

            // Button interactivity
            levelButton.on('pointerup', () => {
                this.scene.start(`level${i + 1}`); // Start the corresponding level
            });

            // Add hover effect
            levelButton.on('pointerover', () => {
                levelButton.setStyle({ backgroundColor: '#0056b3' }); // Darker blue on hover
            });
            levelButton.on('pointerout', () => {
                levelButton.setStyle({ backgroundColor: '#007BFF' }); // Original blue
            });
        }

        // Add "Back" button to return to the main menu
        const backButton = this.add.text(
            this.scale.width / 2,
            this.scale.height - 50,
            'Back to Menu',
            {
                fontFamily: '"Press Start 2P"',
                fontSize: '16px',
                color: '#ffffff',
                backgroundColor: '#FF5733', // Orange button
                padding: { x: 10, y: 5 },
            }
        ).setOrigin(0.5).setInteractive();

        backButton.on('pointerup', () => {
            this.scene.start('StartScene'); // Replace with your main menu scene key
        });

        backButton.on('pointerover', () => {
            backButton.setStyle({ backgroundColor: '#C70039' }); // Darker orange on hover
        });

        backButton.on('pointerout', () => {
            backButton.setStyle({ backgroundColor: '#FF5733' }); // Original orange
        });
    }
}
