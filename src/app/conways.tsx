"use client";
import React, { useEffect, useRef } from 'react';

const ConwayCanvas: React.FC = () => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		let width = (canvas.width = window.innerWidth);
		let height = (canvas.height = window.innerHeight);

		const cellSize = 6;
		let cols = Math.floor(width / cellSize);
		let rows = Math.floor(height / cellSize);

		let grid = new Array(cols).fill(null).map(() =>
			new Array(rows).fill(0).map(() => (Math.random() > 0.25 ? 1 : 0))
		);

		function drawGrid() {
			ctx.clearRect(0, 0, width, height);
			ctx.fillStyle = '#335c40';

			for (let x = 0; x < cols; x++) {
				for (let y = 0; y < rows; y++) {
					if (grid[x][y]) {
						ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
					}
				}
			}
		}

		function updateGrid() {
			const next = grid.map(arr => [...arr]);

			for (let x = 0; x < cols; x++) {
				for (let y = 0; y < rows; y++) {
					let neighbors = 0;

					for (let dx = -1; dx <= 1; dx++) {
						for (let dy = -1; dy <= 1; dy++) {
							if (dx === 0 && dy === 0) continue;

							const nx = x + dx;
							const ny = y + dy;

							if (nx >= 0 && nx < cols && ny >= 0 && ny < rows) {
								neighbors += grid[nx][ny];
							}
						}
					}

					if (grid[x][y]) {
						next[x][y] = neighbors === 2 || neighbors === 3 ? 1 : 0;
					} else {
						next[x][y] = neighbors === 3 ? 1 : 0;
					}
				}
			}

			grid = next;
		}


		const loop = () => {
			updateGrid();
			drawGrid();
			setTimeout(loop, 500);
		};

		loop();

		const handleResize = () => {
			width = canvas.width = window.innerWidth;
			height = canvas.height = window.innerHeight;
			cols = Math.floor(width / cellSize);
			rows = Math.floor(height / cellSize);
			grid = new Array(cols).fill(null).map(() =>
				new Array(rows).fill(0).map(() => (Math.random() > 0.8 ? 1 : 0))
			);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				zIndex: -10,
				width: '100vw',
				height: '100vh',
				opacity: 0.15,
				pointerEvents: 'none',
				imageRendering: 'pixelated',
			}}
		/>
	);
};

export default ConwayCanvas;
