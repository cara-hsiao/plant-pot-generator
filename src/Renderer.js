import * as React from "react";
import { cube } from "@jscad/modeling/src/primitives";
import { render } from "react-dom";
import { Renderer } from "jscad-react";
import { extrudeRotate } from "@jscad/modeling/src/operations/extrusions";
import { polygon } from "@jscad/modeling/src/primitives";

const MyRenderer = () => {
  const top_diameter = 5;
  const bottom_diameter = 4;
  const height = 5;
  const wall_thickness = 0.1;
  const drain_diameter = 1;
  const model =
    top_diameter + bottom_diameter + height + wall_thickness + drain_diameter;
  const profile = polygon({
    points: [
      [top_diameter / 2, height],
      [top_diameter / 2 - wall_thickness, height],
      [bottom_diameter / 2 - wall_thickness, wall_thickness],
      [drain_diameter / 2, wall_thickness],
      [drain_diameter / 2, 0],
      [bottom_diameter / 2, 0]
    ]
  });
  const solids = extrudeRotate({ segments: 150 }, profile);
  return <Renderer solids={solids} height={300} width={380} />;
};

export default MyRenderer;
