import makeCanopeo from '../src/models/canopeo';

const canopeo = makeCanopeo();

describe('CANOPEO', () => {
  it('canopy cover should be 0.36', async () => {
    const param1 = 0.95;
    const param2 = 0.95;
    const param3 = 20;
    const imagePath = 'test/images/test.png';
    expect(
      await canopeo({ imagePath, param1, param2, param3 }).getCanopyCover()
    ).toEqual(0.3696969696969697);
  });
});
