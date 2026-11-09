// Lets TypeScript understand image imports like `import home from "@/assets/icons/home.png"`.
// Metro turns these into an image source you can pass straight to <Image source={...} />.
declare module "*.png" {
  import type { ImageSourcePropType } from "react-native";
  const value: ImageSourcePropType;
  export default value;
}

declare module "*.jpg" {
  import type { ImageSourcePropType } from "react-native";
  const value: ImageSourcePropType;
  export default value;
}

declare module "*.jpeg" {
  import type { ImageSourcePropType } from "react-native";
  const value: ImageSourcePropType;
  export default value;
}

declare module "*.webp" {
  import type { ImageSourcePropType } from "react-native";
  const value: ImageSourcePropType;
  export default value;
}
