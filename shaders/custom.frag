#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float width;
uniform float height;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    //FragColor = texture(image, texcoord);

    vec4 color = texture(image, texcoord);
   // color.r = -color.r;
    //color.g = -color.g;
    //color.b = -color.b;

    FragColor = vec4(1.0 - color.r, 1.0 - color.g, 1.0 - color.b, 1.0);
}
