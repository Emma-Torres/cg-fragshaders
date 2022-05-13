#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec4 color = texture(image, texcoord);

    float red = color.r * 4.0;
    red = round(red);
    red = red/4.0;

    float green = color.g * 4.0;
    green = round(green);
    green = green/4.0;

    float blue = color.b * 4.0;
    blue = round(blue);
    blue = blue/4.0;

    color.r = red;
    color.g = green;
    color.b = blue;

    FragColor = vec4(color.r, color.g, color.b, 1.0);
}
