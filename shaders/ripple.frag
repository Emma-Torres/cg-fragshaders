#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float time;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    //scale and translate the texture coordinate such that it is in the range[-1.0, 1.0]
    //--> multiply by 2, then subtract by 1
    vec2 texcoord_new = (texcoord * 2.0) - 1.0; //error is here

    //calculate radius = magnitude of texture coordinate
    float radius = length(texcoord_new);

    //calculate a texture coordinate offset = texture_coordinate * (sin(radius * 30.0 - time * 5.0) + 0.5) / 60.0
    vec2 offset = texcoord_new * (sin(radius * 30.0 - time * 5.0) + 0.5) / 60.0;

    //calculate final texture coordinate = original texture_coordinate + texture coordinate offset
    texcoord_new = texcoord + offset;

    FragColor = texture(image, texcoord_new);
}
