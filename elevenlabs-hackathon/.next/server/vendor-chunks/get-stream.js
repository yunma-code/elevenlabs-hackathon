"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/get-stream";
exports.ids = ["vendor-chunks/get-stream"];
exports.modules = {

/***/ "(rsc)/./node_modules/get-stream/buffer-stream.js":
/*!**************************************************!*\
  !*** ./node_modules/get-stream/buffer-stream.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst {PassThrough: PassThroughStream} = __webpack_require__(/*! stream */ \"stream\");\n\nmodule.exports = options => {\n\toptions = {...options};\n\n\tconst {array} = options;\n\tlet {encoding} = options;\n\tconst isBuffer = encoding === 'buffer';\n\tlet objectMode = false;\n\n\tif (array) {\n\t\tobjectMode = !(encoding || isBuffer);\n\t} else {\n\t\tencoding = encoding || 'utf8';\n\t}\n\n\tif (isBuffer) {\n\t\tencoding = null;\n\t}\n\n\tconst stream = new PassThroughStream({objectMode});\n\n\tif (encoding) {\n\t\tstream.setEncoding(encoding);\n\t}\n\n\tlet length = 0;\n\tconst chunks = [];\n\n\tstream.on('data', chunk => {\n\t\tchunks.push(chunk);\n\n\t\tif (objectMode) {\n\t\t\tlength = chunks.length;\n\t\t} else {\n\t\t\tlength += chunk.length;\n\t\t}\n\t});\n\n\tstream.getBufferedValue = () => {\n\t\tif (array) {\n\t\t\treturn chunks;\n\t\t}\n\n\t\treturn isBuffer ? Buffer.concat(chunks, length) : chunks.join('');\n\t};\n\n\tstream.getBufferedLength = () => length;\n\n\treturn stream;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZ2V0LXN0cmVhbS9idWZmZXItc3RyZWFtLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsT0FBTyxnQ0FBZ0MsRUFBRSxtQkFBTyxDQUFDLHNCQUFROztBQUV6RDtBQUNBLFlBQVk7O0FBRVosUUFBUSxPQUFPO0FBQ2YsTUFBTSxVQUFVO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUMsV0FBVzs7QUFFbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsiL1VzZXJzL2ppYXl1ZS9lbGV2ZW5sYWJzLWhhY2thdGhvbi9lbGV2ZW5sYWJzLWhhY2thdGhvbi9ub2RlX21vZHVsZXMvZ2V0LXN0cmVhbS9idWZmZXItc3RyZWFtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbmNvbnN0IHtQYXNzVGhyb3VnaDogUGFzc1Rocm91Z2hTdHJlYW19ID0gcmVxdWlyZSgnc3RyZWFtJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gb3B0aW9ucyA9PiB7XG5cdG9wdGlvbnMgPSB7Li4ub3B0aW9uc307XG5cblx0Y29uc3Qge2FycmF5fSA9IG9wdGlvbnM7XG5cdGxldCB7ZW5jb2Rpbmd9ID0gb3B0aW9ucztcblx0Y29uc3QgaXNCdWZmZXIgPSBlbmNvZGluZyA9PT0gJ2J1ZmZlcic7XG5cdGxldCBvYmplY3RNb2RlID0gZmFsc2U7XG5cblx0aWYgKGFycmF5KSB7XG5cdFx0b2JqZWN0TW9kZSA9ICEoZW5jb2RpbmcgfHwgaXNCdWZmZXIpO1xuXHR9IGVsc2Uge1xuXHRcdGVuY29kaW5nID0gZW5jb2RpbmcgfHwgJ3V0ZjgnO1xuXHR9XG5cblx0aWYgKGlzQnVmZmVyKSB7XG5cdFx0ZW5jb2RpbmcgPSBudWxsO1xuXHR9XG5cblx0Y29uc3Qgc3RyZWFtID0gbmV3IFBhc3NUaHJvdWdoU3RyZWFtKHtvYmplY3RNb2RlfSk7XG5cblx0aWYgKGVuY29kaW5nKSB7XG5cdFx0c3RyZWFtLnNldEVuY29kaW5nKGVuY29kaW5nKTtcblx0fVxuXG5cdGxldCBsZW5ndGggPSAwO1xuXHRjb25zdCBjaHVua3MgPSBbXTtcblxuXHRzdHJlYW0ub24oJ2RhdGEnLCBjaHVuayA9PiB7XG5cdFx0Y2h1bmtzLnB1c2goY2h1bmspO1xuXG5cdFx0aWYgKG9iamVjdE1vZGUpIHtcblx0XHRcdGxlbmd0aCA9IGNodW5rcy5sZW5ndGg7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxlbmd0aCArPSBjaHVuay5sZW5ndGg7XG5cdFx0fVxuXHR9KTtcblxuXHRzdHJlYW0uZ2V0QnVmZmVyZWRWYWx1ZSA9ICgpID0+IHtcblx0XHRpZiAoYXJyYXkpIHtcblx0XHRcdHJldHVybiBjaHVua3M7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGlzQnVmZmVyID8gQnVmZmVyLmNvbmNhdChjaHVua3MsIGxlbmd0aCkgOiBjaHVua3Muam9pbignJyk7XG5cdH07XG5cblx0c3RyZWFtLmdldEJ1ZmZlcmVkTGVuZ3RoID0gKCkgPT4gbGVuZ3RoO1xuXG5cdHJldHVybiBzdHJlYW07XG59O1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/get-stream/buffer-stream.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/get-stream/index.js":
/*!******************************************!*\
  !*** ./node_modules/get-stream/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst {constants: BufferConstants} = __webpack_require__(/*! buffer */ \"buffer\");\nconst stream = __webpack_require__(/*! stream */ \"stream\");\nconst {promisify} = __webpack_require__(/*! util */ \"util\");\nconst bufferStream = __webpack_require__(/*! ./buffer-stream */ \"(rsc)/./node_modules/get-stream/buffer-stream.js\");\n\nconst streamPipelinePromisified = promisify(stream.pipeline);\n\nclass MaxBufferError extends Error {\n\tconstructor() {\n\t\tsuper('maxBuffer exceeded');\n\t\tthis.name = 'MaxBufferError';\n\t}\n}\n\nasync function getStream(inputStream, options) {\n\tif (!inputStream) {\n\t\tthrow new Error('Expected a stream');\n\t}\n\n\toptions = {\n\t\tmaxBuffer: Infinity,\n\t\t...options\n\t};\n\n\tconst {maxBuffer} = options;\n\tconst stream = bufferStream(options);\n\n\tawait new Promise((resolve, reject) => {\n\t\tconst rejectPromise = error => {\n\t\t\t// Don't retrieve an oversized buffer.\n\t\t\tif (error && stream.getBufferedLength() <= BufferConstants.MAX_LENGTH) {\n\t\t\t\terror.bufferedData = stream.getBufferedValue();\n\t\t\t}\n\n\t\t\treject(error);\n\t\t};\n\n\t\t(async () => {\n\t\t\ttry {\n\t\t\t\tawait streamPipelinePromisified(inputStream, stream);\n\t\t\t\tresolve();\n\t\t\t} catch (error) {\n\t\t\t\trejectPromise(error);\n\t\t\t}\n\t\t})();\n\n\t\tstream.on('data', () => {\n\t\t\tif (stream.getBufferedLength() > maxBuffer) {\n\t\t\t\trejectPromise(new MaxBufferError());\n\t\t\t}\n\t\t});\n\t});\n\n\treturn stream.getBufferedValue();\n}\n\nmodule.exports = getStream;\nmodule.exports.buffer = (stream, options) => getStream(stream, {...options, encoding: 'buffer'});\nmodule.exports.array = (stream, options) => getStream(stream, {...options, array: true});\nmodule.exports.MaxBufferError = MaxBufferError;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZ2V0LXN0cmVhbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLE9BQU8sNEJBQTRCLEVBQUUsbUJBQU8sQ0FBQyxzQkFBUTtBQUNyRCxlQUFlLG1CQUFPLENBQUMsc0JBQVE7QUFDL0IsT0FBTyxXQUFXLEVBQUUsbUJBQU8sQ0FBQyxrQkFBTTtBQUNsQyxxQkFBcUIsbUJBQU8sQ0FBQyx5RUFBaUI7O0FBRTlDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLFdBQVc7QUFDbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLDJDQUEyQywrQkFBK0I7QUFDL0Ysb0JBQW9CLDJDQUEyQyx3QkFBd0I7QUFDdkYsNkJBQTZCIiwic291cmNlcyI6WyIvVXNlcnMvamlheXVlL2VsZXZlbmxhYnMtaGFja2F0aG9uL2VsZXZlbmxhYnMtaGFja2F0aG9uL25vZGVfbW9kdWxlcy9nZXQtc3RyZWFtL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbmNvbnN0IHtjb25zdGFudHM6IEJ1ZmZlckNvbnN0YW50c30gPSByZXF1aXJlKCdidWZmZXInKTtcbmNvbnN0IHN0cmVhbSA9IHJlcXVpcmUoJ3N0cmVhbScpO1xuY29uc3Qge3Byb21pc2lmeX0gPSByZXF1aXJlKCd1dGlsJyk7XG5jb25zdCBidWZmZXJTdHJlYW0gPSByZXF1aXJlKCcuL2J1ZmZlci1zdHJlYW0nKTtcblxuY29uc3Qgc3RyZWFtUGlwZWxpbmVQcm9taXNpZmllZCA9IHByb21pc2lmeShzdHJlYW0ucGlwZWxpbmUpO1xuXG5jbGFzcyBNYXhCdWZmZXJFcnJvciBleHRlbmRzIEVycm9yIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoJ21heEJ1ZmZlciBleGNlZWRlZCcpO1xuXHRcdHRoaXMubmFtZSA9ICdNYXhCdWZmZXJFcnJvcic7XG5cdH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0U3RyZWFtKGlucHV0U3RyZWFtLCBvcHRpb25zKSB7XG5cdGlmICghaW5wdXRTdHJlYW0pIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGEgc3RyZWFtJyk7XG5cdH1cblxuXHRvcHRpb25zID0ge1xuXHRcdG1heEJ1ZmZlcjogSW5maW5pdHksXG5cdFx0Li4ub3B0aW9uc1xuXHR9O1xuXG5cdGNvbnN0IHttYXhCdWZmZXJ9ID0gb3B0aW9ucztcblx0Y29uc3Qgc3RyZWFtID0gYnVmZmVyU3RyZWFtKG9wdGlvbnMpO1xuXG5cdGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRjb25zdCByZWplY3RQcm9taXNlID0gZXJyb3IgPT4ge1xuXHRcdFx0Ly8gRG9uJ3QgcmV0cmlldmUgYW4gb3ZlcnNpemVkIGJ1ZmZlci5cblx0XHRcdGlmIChlcnJvciAmJiBzdHJlYW0uZ2V0QnVmZmVyZWRMZW5ndGgoKSA8PSBCdWZmZXJDb25zdGFudHMuTUFYX0xFTkdUSCkge1xuXHRcdFx0XHRlcnJvci5idWZmZXJlZERhdGEgPSBzdHJlYW0uZ2V0QnVmZmVyZWRWYWx1ZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdH07XG5cblx0XHQoYXN5bmMgKCkgPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgc3RyZWFtUGlwZWxpbmVQcm9taXNpZmllZChpbnB1dFN0cmVhbSwgc3RyZWFtKTtcblx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0cmVqZWN0UHJvbWlzZShlcnJvcik7XG5cdFx0XHR9XG5cdFx0fSkoKTtcblxuXHRcdHN0cmVhbS5vbignZGF0YScsICgpID0+IHtcblx0XHRcdGlmIChzdHJlYW0uZ2V0QnVmZmVyZWRMZW5ndGgoKSA+IG1heEJ1ZmZlcikge1xuXHRcdFx0XHRyZWplY3RQcm9taXNlKG5ldyBNYXhCdWZmZXJFcnJvcigpKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG5cblx0cmV0dXJuIHN0cmVhbS5nZXRCdWZmZXJlZFZhbHVlKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0U3RyZWFtO1xubW9kdWxlLmV4cG9ydHMuYnVmZmVyID0gKHN0cmVhbSwgb3B0aW9ucykgPT4gZ2V0U3RyZWFtKHN0cmVhbSwgey4uLm9wdGlvbnMsIGVuY29kaW5nOiAnYnVmZmVyJ30pO1xubW9kdWxlLmV4cG9ydHMuYXJyYXkgPSAoc3RyZWFtLCBvcHRpb25zKSA9PiBnZXRTdHJlYW0oc3RyZWFtLCB7Li4ub3B0aW9ucywgYXJyYXk6IHRydWV9KTtcbm1vZHVsZS5leHBvcnRzLk1heEJ1ZmZlckVycm9yID0gTWF4QnVmZmVyRXJyb3I7XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/get-stream/index.js\n");

/***/ })

};
;