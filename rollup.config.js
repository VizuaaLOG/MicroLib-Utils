import buble from 'rollup-plugin-buble';

export default {
    entry: 'src/utils.microlib.js',
    plugins: [buble()]
}
