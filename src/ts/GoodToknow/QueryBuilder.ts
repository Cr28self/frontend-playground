class QueryBuilder {
  private fields: string[] = [];
  private wheres: Record<string, string> = {};
  private table: string = "";

  select(...columns: string[]) {
    this.fields = columns;
    return this;
  }

  from(table: string) {
    this.table = table;
    return this;
  }

  where(columns: string, values: string) {
    this.wheres[columns] = values;
    return this;
  }

  build() {
    return `SELECT ${this.fields.join(", ")} FROM ${this.table} WHERE ${Object.entries(this.wheres)}`;
  }
}

const query = new QueryBuilder()
  .select("name", "email")
  .from("usersTable")
  .where("id", "1");
