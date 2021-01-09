export const ls = {
  storage: localStorage,
  setStorage(storage: Storage) {
    this.storage = storage;
  },
  set(key: string, value: string) {
    this.storage.setItem(key, JSON.stringify(value));
  },
  get(key: string): unknown | undefined {
    const raw = this.storage.getItem(key);

    if (raw) {
      try {
        return JSON.parse(raw);
      } catch (error) {
        return raw;
      }
    }
  },
};
