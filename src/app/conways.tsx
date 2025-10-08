"use client";
import React, { useEffect, useRef } from 'react';

const ConwayCanvas: React.FC = () => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	const gridRef = useRef<number[][]>([]);

	const [tooltip, setTooltip] = React.useState<{ x: number; y: number; message: string } | null>();

	const cellSize = 12;

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');

		let width = (canvas.width = document.documentElement.scrollWidth);
		let height = (canvas.height = document.documentElement.scrollHeight);

		let cols = Math.floor(width / cellSize);
		let rows = Math.floor(height / cellSize);

		let grid = new Array(cols).fill(null).map(() =>
			new Array(rows).fill(0).map(() => (Math.random() > 0.25 ? 1 : 0))
		);

		gridRef.current = grid;
		function drawGrid() {
			if (ctx === null) return;
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

			gridRef.current = next;
			grid = next;
		}


		const loop = () => {
			updateGrid();
			drawGrid();
			setTimeout(loop, 800);
		};

		loop();

		const handleResize = () => {
			width = (canvas.width = document.documentElement.scrollWidth);
			height = (canvas.height = document.documentElement.scrollHeight);
			cols = Math.floor(width / cellSize);
			rows = Math.floor(height / cellSize);
			grid = new Array(cols).fill(null).map(() =>
				new Array(rows).fill(0).map(() => (Math.random() > 0.9 ? 1 : 0))
			);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const handleClick = (e: MouseEvent) => {
		const rect = canvasRef.current!.getBoundingClientRect();
		const x = Math.floor((e.clientX - rect.left) / cellSize);
		const y = Math.floor((e.clientY - rect.top) / cellSize);
		if (!gridRef.current[x]) {
			return
		}

		if (gridRef.current[x][y] == 1) {
			console.log("this was a conways")
			setTooltip({ x, y, message: " is a zero-player game. it is a cellular automaton where cells evolve based on simple rules without further input" })
		}

	}

	return (
		<>
			{tooltip && (
				<div
					style={{
						position: "absolute",
						left: tooltip.x * cellSize,
						top: tooltip.y * cellSize,
						background: "rgba(23, 23, 23, 0.9)",
						color: "#8fc13e",
						fontFamily: "monospace",
						padding: "8px 10px",
						borderRadius: "8px",
						fontSize: "0.8rem",
						zIndex: 1000,
						opacity: 1,
						transition: "opacity 0.3s ease",
						maxWidth: "220px"
					}} onClick={() => setTooltip(null)}
				>
					<a href='https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life' className='underline'>conways game of life</a> {tooltip.message}
					<br />
					<br />
					<p className="text-xs text-pipboyGreen animate-pulse">(click again to close me)</p>
				</div>
			)}
			<canvas
				ref={canvasRef}
				onClick={(e) => handleClick(e as unknown as MouseEvent)}
				style={{
					position: 'fixed',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					opacity: 0.25,

					zIndex: 0,
					// pointerEvents: 'none',
					imageRendering: 'pixelated',
				}}
			/>
		</>

	);
};

export default ConwayCanvas;
