"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	* {
		list-style: none;
		text-decoration: none;
		margin: 0;
		padding: 0;
		text-align: left;
		border: 0;

		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		outline: 0;
		font-weight: normal;
		font-size: 1.6rem;
		font-family: var(--inter), sans-serif;
		scrollbar-width: 14px;
    	scrollbar-color: #C8DCF0 transparent;
	}

  *::-webkit-scrollbar {
    width: 14px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #C8DCF0;
    border-radius: 24px;
  }

	button {
		background: transparent;
		cursor: pointer;
	}

	img {
		display: block;
		max-width: 100%;
	}

	html,
	body {
		overflow-x: hidden;
	}

	html {
		font-size: 62.5%;
		scroll-behavior: smooth;
		overflow: overlay;

		@media (max-width: 1250px) {
			font-size: 55%;
		}
		@media (max-width: 600px) {
			font-size: 62.5%;
		}
	}

	input,
	button,
	textarea {
		appearance: none;
	}

	:is(figure, div, span):has(> .drawer-figure-area) {
		pointer-events: none;
	}


	a,
	button {
		&:focus-visible {
			border-radius: 2px;
			transition: none;
			outline: 0;
		}
	}

	@keyframes overlayShow {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes contentShow {
		from {
			opacity: 0;
			transform: translate(-50%, -48%) scale(0.96);
		}
		to {
			opacity: 1;
			transform: translate(-50%, -50%) scale(1);
		}
	}
`;
