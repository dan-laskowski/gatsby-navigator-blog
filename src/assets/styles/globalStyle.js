import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    a {
        text-decoration: none;
    }

    /* custom checkbox styles */
    .b-contain *, .b-contain *::before, .b-contain *::after {
	box-sizing: content-box !important;
}

.b-contain input {
	position: absolute;
	z-index: -1;
	opacity: 0;
}

.b-contain span {
	line-height: 1.54;
	font-size: 1rem;
	font-family: inherit;
}

.b-contain {
	display: table;
	position: relative;
	padding-left: 1.8rem;
	cursor: pointer;
	margin-bottom: .5rem;
}

.b-contain input[type="checkbox"] ~ .b-input {
	position: absolute;
	top: 0;
	left: 0;
	height: 1.25rem;
	width: 1.25rem;
	background: rgba(241, 245, 248, 1);
	transition: background 250ms;
	border: 1px solid rgba(184, 194, 204, 1);
	border-radius: 0.125rem;
}

.b-contain input[type="radio"] ~ .b-input {
	position: absolute;
	top: 0;
	left: 0;
	height: 1.25rem;
	width: 1.25rem;
	background: rgba(241, 245, 248, 1);
	transition: background 250ms;
	border: 1px solid rgba(184, 194, 204, 1);
	border-radius: 2.0rem;
}

.b-contain input[type="checkbox"] ~ .b-input::after {
	content: '';
	position: absolute;
	display: none;
	left: .45rem;
	top: .18rem;
	width: .25rem;
	height: .6rem;
	border: solid rgba(255, 255, 255, 1);
	border-width: 0 2px 2px 0;
	transition: background 250ms;
	transform: rotate(45deg);
}

.b-contain input[type="radio"] ~ .b-input::after {
	content: '';
	position: absolute;
	display: none;
	left: .25rem;
	top: .25rem;
	width: .75rem;
	height: .75rem;
	border-radius: 2.0rem;
	background: rgba(255, 255, 255, 1);
	transition: background 250ms;
}

.b-contain input:disabled ~ .b-input::after {
	border-color: rgba(135, 149, 161, 1);
}

.b-contain input:checked ~ .b-input::after {
	display: block;
}

.b-contain:hover input ~ .b-input,
.b-contain input:focus ~ .b-input {
	background: rgb(231, 238, 243);
}

.b-contain input:focus ~ .b-input {
	box-shadow: 0 0 0 2px rgba(52,144,220,0.5);
}

.b-contain input:checked ~ .b-input {
	background: rgba(0, 130, 243, 1);
	border-color: rgba(0, 130, 243, 1);
}

.b-contain input[type="checkbox"]:disabled ~ .b-input {
	background: rgba(241, 245, 248, 1);
	border-color: rgba(184, 194, 204, 1);
	opacity: 0.6;
	cursor: not-allowed;
}

.b-contain input[type="radio"]:disabled ~ .b-input {
	background: rgba(241, 245, 248, 1);
	border-color: rgba(184, 194, 204, 1);
	opacity: 0.6;
	cursor: not-allowed;
}

.b-contain input[type="radio"]:disabled ~ .b-input::after {
	background: rgba(135, 149, 161, 1);
}

.b-contain input:checked:focus ~ .b-input, .b-contain:hover input:not([disabled]):checked ~ .b-input {
	background: rgba(13, 143, 255, 1);
	border-color: rgba(13, 143, 255, 1);
}

.b-contain .b-input::before {
	content: '';
	display: block;
	position: absolute;
	left: 0;
	top: 0;
	width: 3rem;
	height: 3rem;
	margin-left: -0.85rem;
	margin-top: -0.85rem;
	background: rgba(0, 130, 243, 1);
	border-radius: 2rem;
	opacity: .6;
	z-index: 99999;
	transform: scale(0);
}

@keyframes b-ripple {
	0% {
		transform: scale(0);
	}

	20% {
		transform: scale(1);
	}

	100% {
		opacity: 0;
		transform: scale(1);
  	}
}

@keyframes b-ripple-duplicate {
	0% {
		transform: scale(0);
	}

	30% {
		transform: scale(1);
	}

	60% {
		transform: scale(1);
	}

	100% {
		opacity: 0;
		transform: scale(1);
  	}
}

.b-contain input + .b-input::before {
	animation: b-ripple 250ms ease-out;
}

.b-contain input:checked + .b-input::before {
	animation-name: b-ripple-duplicate;
}

.b-contain .b-input::before {
	visibility: hidden;
}

.b-contain input:focus + .b-input::before {
	visibility: visible;
}

.b-contain:first-child .b-input::before {
	visibility: hidden;
}

/* SLIDER */

.splide__arrow svg {
	fill: #DBDBDB;
	width: 50px;
	height: 50px;
}

.splide__arrow svg:hover {
	fill: rgb(240,117,56);
}

.splide__arrow--prev {
    left: -110px;
}

.splide__arrow--next {
    right: -110px;
}

.splide__pagination__page {
	height:8px;
	width: 8px;
}

.splide__pagination__page.is-active {
	height:8px !important;
	width: 8px !important;
	background: #F07539;
}
`;

export default GlobalStyle;
