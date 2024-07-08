import React, { useEffect } from 'react'
const AnimetionPoint = (props) => {
  const STAR_SIZE = 5;
  const STAR_MIN_SCALE = 0.05;
  const OVERFLOW_THRESHOLD = 50;
  const STAR_COUNT = ( window.innerWidth + window.innerHeight ) / 10;
  useEffect(()=> {
    const canvas = document.querySelector( 'canvas' ),
    context = canvas.getContext( '2d' );
let scale = 1,
  width,
  height;
let stars = [];
let velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.009 };
generate();
resize();
step();
window.onresize = resize;

function generate() {
 for( let i = 0; i < STAR_COUNT; i++ ) {
  stars.push({
    x: 0,
    y: 0,
    z: STAR_MIN_SCALE + Math.random() * ( 1 - STAR_MIN_SCALE ),
    color: `rgba(${Math.floor(Math.random()*255)+200}, ${Math.floor(Math.random()*2)+170}, ${Math.random()*255},0.6)`
  });
 }
}
function placeStar( star ) {
star.x = Math.random() * width;
star.y = Math.random() * height;
}
function recycleStar( star ) {
let direction = 'z';
let vx = Math.abs( velocity.x ),
    vy = Math.abs( velocity.y );

if( vx > 1 || vy > 1 ) {
  let axis;

  if( vx > vy ) {
    axis = Math.random() < vx / ( vx + vy ) ? 'h' : 'v';
  }
  else {
    axis = Math.random() < vy / ( vx + vy ) ? 'v' : 'h';
  }

  if( axis === 'h' ) {
    direction = velocity.x > 0 ? 'l' : 'r';
  }
  else {
    direction = velocity.y > 0 ? 't' : 'b';
  }
}
star.z = STAR_MIN_SCALE + Math.random() * ( 1 - STAR_MIN_SCALE );
if( direction === 'z' ) {
  star.z = 0.1;
  star.x = Math.random() * width;
  star.y = Math.random() * height;
}
else if( direction === 'l' ) {
  star.x = -OVERFLOW_THRESHOLD;
  star.y = height * Math.random();
}
else if( direction === 'r' ) {
  star.x = width + OVERFLOW_THRESHOLD;
  star.y = height * Math.random();
}
else if( direction === 't' ) {
  star.x = width * Math.random();
  star.y = -OVERFLOW_THRESHOLD;
}
else if( direction === 'b' ) {
  star.x = width * Math.random();
  star.y = height + OVERFLOW_THRESHOLD;
}
}
function resize() {
scale = window.devicePixelRatio || 1;
width = window.innerWidth * scale;
height = window.innerHeight * scale;
canvas.width = width;
canvas.height = height;
stars.forEach( placeStar );
}
function step() {
context.clearRect( 0, 0, width, height );
update();
render();
requestAnimationFrame( step );
}
function update() {
  velocity.tx *= 0.96;
  velocity.ty *= 0.96;
  velocity.x += (velocity.tx - velocity.x) * 0.8;
  velocity.y += (velocity.ty - velocity.y) * 0.8;
  stars.forEach((star) => {
      star.x += velocity.x * star.z * (width / window.innerWidth);
      star.y += velocity.y * star.z * (height / window.innerHeight);
      star.x += (star.x - width / 2) * velocity.z * star.z * (width / window.innerWidth);
      star.y += (star.y - height / 2) * velocity.z * star.z * (height / window.innerHeight);
      star.z += velocity.z;
      // recycle when out of bounds
      if (
          star.x < -OVERFLOW_THRESHOLD ||
          star.x > width + OVERFLOW_THRESHOLD ||
          star.y < -OVERFLOW_THRESHOLD ||
          star.y > height + OVERFLOW_THRESHOLD
      ) {
          recycleStar(star);
      }
  });
}
function render() {
stars.forEach( ( star ) => {
  context.beginPath();
  context.lineCap = 'round';
  context.lineWidth = STAR_SIZE * star.z * scale;
  context.globalAlpha = 0.5 + 0.5*Math.random();
  context.strokeStyle = star.color;
  context.beginPath();
  context.moveTo( star.x, star.y );
  let tailX = velocity.x * 2,
      tailY = velocity.y * 2;
  // stroke() wont work on an invisible line
  if( Math.abs( tailX ) < 0.1 ) tailX = 0.5;
  if( Math.abs( tailY ) < 0.1 ) tailY = 0.5;
  context.lineTo( star.x + tailX, star.y + tailY );
  context.stroke();
} );
}
  },[]) 
  return (
    <canvas {...props}></canvas>
  )
}

export default AnimetionPoint