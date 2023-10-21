import { extrudeRotate } from "@jscad/modeling/src/operations/extrusions";
import { polygon } from "@jscad/modeling/src/primitives";
import { stlSerializer } from "@jscad/stl-serializer";

const data = () => {
  const top_diameter = 5;
  const bottom_diameter = 4;
  const height = 5;
  const wall_thickness = 0.1;
  const drain_diameter = 1;

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
  const rawData = stlSerializer.serialize({ binary: true }, solids);
  const blob = new Blob(rawData);

  return blob;
};

export default data;
