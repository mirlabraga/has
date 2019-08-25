
export class PainsService {

  public async getPains(): Promise<Number[]> {
    const response = await fetch(`/api/v1/pains`);

    if (response.status != 200) {
      throw { status: response.status };
    }
    return await response.json() as Number[];
  }
}
