class SearchModel {
  get data() { return Jjal.instances }
  set = (list) => list.map((_, idx) => Jjal.instances.set(idx, new Jjal(_)));
  reset = () => Jjal.instances.clear();
}
