#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    //scale and translate the texture coordinate such that it is in the range[-1.0, 1.0]
    //--> multiply by 2, then subtract by 1
    vec2 texcoord_new = (texcoord * 2.0) - 1.0; //error is here

    //calculate theta = arctan(texture_coordinate_y, texture_coordinate_x)
    float theta = atan(texcoord_new.y, texcoord_new.x);

    //calculate radius = magnitude of texture coordinate, raised to the power of 1.5
    float radius = pow(length(texcoord_new), 1.5);

    //calculate fish eye texture coordinate = (radius * cos(theta), radius * sin(theta))
    float x = radius * cos(theta);
    float y = radius * sin(theta);
    texcoord_new.x = x; 
    texcoord_new.y = y; 

    texcoord_new = 0.5 * (texcoord_new + 1.0); //error here

    FragColor = texture(image, texcoord_new);
}
