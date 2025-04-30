export function Log(target: any, key: string, desc: PropertyDescriptor) {
  const original = desc.value;
  desc.value = function () {
    console.log(key);
    return original.apply(this);
  };
}
