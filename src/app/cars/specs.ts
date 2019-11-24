export interface CarSpecs {
  inertiaScale?: number;
  mass?: number;
  cgToFront?: number;
  cgToRear?: number;
  cgToFrontAxle?: number;
  cgToRearAxle?: number;
  cgHeight?: number;
  tireGripFront?: number;
  tireGripRear?: number;
  lockGrip?: number;
  engineForce?: number;
  brakeForce?: number;
  ebrakeForce?: number;
  weightTransfer?: number;
  maxSteer?: number;
  cornerStiffnessFront?: number;
  cornerStiffnessRear?: number;
}
