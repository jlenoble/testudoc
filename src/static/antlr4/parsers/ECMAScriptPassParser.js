// Generated from /home/jason/Projets/ecmascript-parser/src/static/antlr4/grammars/ECMAScriptPass.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ECMAScriptPassListener = require('./ECMAScriptPassListener').ECMAScriptPassListener;
var grammarFileName = "ECMAScriptPass.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003m\u0160\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u00041\t1\u00042\t2\u0004",
    "3\t3\u00044\t4\u0003\u0002\u0005\u0002j\n\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003r\n\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004w\n\u0004\f\u0004\u000e",
    "\u0004z\u000b\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0005\u0005\u0080\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0005",
    "\u0006\u0085\n\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b",
    "\u0003\b\u0003\b\u0005\b\u008e\n\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003",
    "\n\u0005\n\u0095\n\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005\n\u009b\n",
    "\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0005\f\u00a5\n\f\u0003\f\u0003\f\u0005\f\u00a9\n\f\u0003",
    "\r\u0003\r\u0003\r\u0007\r\u00ae\n\r\f\r\u000e\r\u00b1\u000b\r\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u00c2\n\u0012\u0003\u0012",
    "\u0003\u0012\u0005\u0012\u00c6\n\u0012\u0003\u0013\u0005\u0013\u00c9",
    "\n\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0005\u0013\u00ce\n\u0013",
    "\u0003\u0013\u0007\u0013\u00d1\n\u0013\f\u0013\u000e\u0013\u00d4\u000b",
    "\u0013\u0003\u0014\u0003\u0014\u0005\u0014\u00d8\n\u0014\u0003\u0015",
    "\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0005\u0018\u00ea\n\u0018\u0003",
    "\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003",
    "\u001c\u0003\u001c\u0003\u001c\u0006\u001c\u00f5\n\u001c\r\u001c\u000e",
    "\u001c\u00f6\u0003\u001d\u0003\u001d\u0003\u001d\u0006\u001d\u00fc\n",
    "\u001d\r\u001d\u000e\u001d\u00fd\u0003\u001e\u0003\u001e\u0005\u001e",
    "\u0102\n\u001e\u0003\u001f\u0003\u001f\u0005\u001f\u0106\n\u001f\u0003",
    " \u0003 \u0003!\u0003!\u0003\"\u0003\"\u0003#\u0003#\u0005#\u0110\n",
    "#\u0003$\u0003$\u0003$\u0003$\u0003%\u0003%\u0003&\u0003&\u0003&\u0007",
    "&\u011b\n&\f&\u000e&\u011e\u000b&\u0003\'\u0003\'\u0005\'\u0122\n\'",
    "\u0003(\u0003(\u0005(\u0126\n(\u0003)\u0003)\u0003*\u0003*\u0003*\u0003",
    "*\u0003*\u0003*\u0003*\u0003*\u0003*\u0003+\u0003+\u0005+\u0135\n+\u0003",
    "+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003,\u0003,\u0003-\u0003",
    "-\u0003-\u0005-\u0143\n-\u0005-\u0145\n-\u0003.\u0003.\u0003.\u0007",
    ".\u014a\n.\f.\u000e.\u014d\u000b.\u0003/\u0003/\u00030\u00030\u0003",
    "1\u00051\u0154\n1\u00032\u00032\u00032\u00032\u00052\u015a\n2\u0003",
    "3\u00033\u00034\u00034\u00034\u0002\u00025\u0002\u0004\u0006\b\n\f\u000e",
    "\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@B",
    "DFHJLNPRTVXZ\\^`bdf\u0002\u0007\u0005\u0002\u0003\u0003:;dd\u0005\u0002",
    "\u0003\u0003ddhh\u0004\u0002)377\u0004\u0002AAcc\u0003\u0002<]\u0002",
    "\u0156\u0002i\u0003\u0002\u0002\u0002\u0004q\u0003\u0002\u0002\u0002",
    "\u0006s\u0003\u0002\u0002\u0002\b\u007f\u0003\u0002\u0002\u0002\n\u0084",
    "\u0003\u0002\u0002\u0002\f\u0086\u0003\u0002\u0002\u0002\u000e\u008d",
    "\u0003\u0002\u0002\u0002\u0010\u008f\u0003\u0002\u0002\u0002\u0012\u009a",
    "\u0003\u0002\u0002\u0002\u0014\u009c\u0003\u0002\u0002\u0002\u0016\u00a8",
    "\u0003\u0002\u0002\u0002\u0018\u00aa\u0003\u0002\u0002\u0002\u001a\u00b2",
    "\u0003\u0002\u0002\u0002\u001c\u00b6\u0003\u0002\u0002\u0002\u001e\u00b8",
    "\u0003\u0002\u0002\u0002 \u00ba\u0003\u0002\u0002\u0002\"\u00c5\u0003",
    "\u0002\u0002\u0002$\u00c8\u0003\u0002\u0002\u0002&\u00d7\u0003\u0002",
    "\u0002\u0002(\u00d9\u0003\u0002\u0002\u0002*\u00db\u0003\u0002\u0002",
    "\u0002,\u00dd\u0003\u0002\u0002\u0002.\u00e9\u0003\u0002\u0002\u0002",
    "0\u00eb\u0003\u0002\u0002\u00022\u00ed\u0003\u0002\u0002\u00024\u00ef",
    "\u0003\u0002\u0002\u00026\u00f4\u0003\u0002\u0002\u00028\u00fb\u0003",
    "\u0002\u0002\u0002:\u0101\u0003\u0002\u0002\u0002<\u0105\u0003\u0002",
    "\u0002\u0002>\u0107\u0003\u0002\u0002\u0002@\u0109\u0003\u0002\u0002",
    "\u0002B\u010b\u0003\u0002\u0002\u0002D\u010d\u0003\u0002\u0002\u0002",
    "F\u0111\u0003\u0002\u0002\u0002H\u0115\u0003\u0002\u0002\u0002J\u0117",
    "\u0003\u0002\u0002\u0002L\u011f\u0003\u0002\u0002\u0002N\u0125\u0003",
    "\u0002\u0002\u0002P\u0127\u0003\u0002\u0002\u0002R\u0129\u0003\u0002",
    "\u0002\u0002T\u0132\u0003\u0002\u0002\u0002V\u013d\u0003\u0002\u0002",
    "\u0002X\u0144\u0003\u0002\u0002\u0002Z\u0146\u0003\u0002\u0002\u0002",
    "\\\u014e\u0003\u0002\u0002\u0002^\u0150\u0003\u0002\u0002\u0002`\u0153",
    "\u0003\u0002\u0002\u0002b\u0159\u0003\u0002\u0002\u0002d\u015b\u0003",
    "\u0002\u0002\u0002f\u015d\u0003\u0002\u0002\u0002hj\u00056\u001c\u0002",
    "ih\u0003\u0002\u0002\u0002ij\u0003\u0002\u0002\u0002jk\u0003\u0002\u0002",
    "\u0002kl\u0007\u0002\u0002\u0003l\u0003\u0003\u0002\u0002\u0002mr\u0007",
    "\u000b\u0002\u0002nr\u0006\u0003\u0002\u0002or\u0006\u0003\u0003\u0002",
    "pr\u0006\u0003\u0004\u0002qm\u0003\u0002\u0002\u0002qn\u0003\u0002\u0002",
    "\u0002qo\u0003\u0002\u0002\u0002qp\u0003\u0002\u0002\u0002r\u0005\u0003",
    "\u0002\u0002\u0002sx\u0005.\u0018\u0002tu\u0007\f\u0002\u0002uw\u0005",
    ".\u0018\u0002vt\u0003\u0002\u0002\u0002wz\u0003\u0002\u0002\u0002xv",
    "\u0003\u0002\u0002\u0002xy\u0003\u0002\u0002\u0002y\u0007\u0003\u0002",
    "\u0002\u0002zx\u0003\u0002\u0002\u0002{\u0080\u0005\f\u0007\u0002|\u0080",
    "\u0007]\u0002\u0002}~\u0007<\u0002\u0002~\u0080\u0007\u0017\u0002\u0002",
    "\u007f{\u0003\u0002\u0002\u0002\u007f|\u0003\u0002\u0002\u0002\u007f",
    "}\u0003\u0002\u0002\u0002\u0080\t\u0003\u0002\u0002\u0002\u0081\u0085",
    "\u0005\f\u0007\u0002\u0082\u0085\u0007]\u0002\u0002\u0083\u0085\u0007",
    "<\u0002\u0002\u0084\u0081\u0003\u0002\u0002\u0002\u0084\u0082\u0003",
    "\u0002\u0002\u0002\u0084\u0083\u0003\u0002\u0002\u0002\u0085\u000b\u0003",
    "\u0002\u0002\u0002\u0086\u0087\u0007h\u0002\u0002\u0087\r\u0003\u0002",
    "\u0002\u0002\u0088\u008e\u0005\b\u0005\u0002\u0089\u008e\u0005\u0010",
    "\t\u0002\u008a\u008e\u0005\u0016\f\u0002\u008b\u008e\u0005T+\u0002\u008c",
    "\u008e\u0005\u0012\n\u0002\u008d\u0088\u0003\u0002\u0002\u0002\u008d",
    "\u0089\u0003\u0002\u0002\u0002\u008d\u008a\u0003\u0002\u0002\u0002\u008d",
    "\u008b\u0003\u0002\u0002\u0002\u008d\u008c\u0003\u0002\u0002\u0002\u008e",
    "\u000f\u0003\u0002\u0002\u0002\u008f\u0090\t\u0002\u0002\u0002\u0090",
    "\u0011\u0003\u0002\u0002\u0002\u0091\u0092\u0007\u0005\u0002\u0002\u0092",
    "\u0094\u0005\u0006\u0004\u0002\u0093\u0095\u0007\f\u0002\u0002\u0094",
    "\u0093\u0003\u0002\u0002\u0002\u0094\u0095\u0003\u0002\u0002\u0002\u0095",
    "\u0096\u0003\u0002\u0002\u0002\u0096\u0097\u0007\u0006\u0002\u0002\u0097",
    "\u009b\u0003\u0002\u0002\u0002\u0098\u0099\u0007\u0005\u0002\u0002\u0099",
    "\u009b\u0007\u0006\u0002\u0002\u009a\u0091\u0003\u0002\u0002\u0002\u009a",
    "\u0098\u0003\u0002\u0002\u0002\u009b\u0013\u0003\u0002\u0002\u0002\u009c",
    "\u009d\u0005*\u0016\u0002\u009d\u009e\u0005\"\u0012\u0002\u009e\u0015",
    "\u0003\u0002\u0002\u0002\u009f\u00a0\u0007\u0004\u0002\u0002\u00a0\u00a9",
    "\u00079\u0002\u0002\u00a1\u00a2\u0007\u0004\u0002\u0002\u00a2\u00a4",
    "\u0005\u0018\r\u0002\u00a3\u00a5\u0007\f\u0002\u0002\u00a4\u00a3\u0003",
    "\u0002\u0002\u0002\u00a4\u00a5\u0003\u0002\u0002\u0002\u00a5\u00a6\u0003",
    "\u0002\u0002\u0002\u00a6\u00a7\u00079\u0002\u0002\u00a7\u00a9\u0003",
    "\u0002\u0002\u0002\u00a8\u009f\u0003\u0002\u0002\u0002\u00a8\u00a1\u0003",
    "\u0002\u0002\u0002\u00a9\u0017\u0003\u0002\u0002\u0002\u00aa\u00af\u0005",
    "\u001a\u000e\u0002\u00ab\u00ac\u0007\f\u0002\u0002\u00ac\u00ae\u0005",
    "\u001a\u000e\u0002\u00ad\u00ab\u0003\u0002\u0002\u0002\u00ae\u00b1\u0003",
    "\u0002\u0002\u0002\u00af\u00ad\u0003\u0002\u0002\u0002\u00af\u00b0\u0003",
    "\u0002\u0002\u0002\u00b0\u0019\u0003\u0002\u0002\u0002\u00b1\u00af\u0003",
    "\u0002\u0002\u0002\u00b2\u00b3\u0005\u001c\u000f\u0002\u00b3\u00b4\u0007",
    "\'\u0002\u0002\u00b4\u00b5\u0005.\u0018\u0002\u00b5\u001b\u0003\u0002",
    "\u0002\u0002\u00b6\u00b7\u0005\u001e\u0010\u0002\u00b7\u001d\u0003\u0002",
    "\u0002\u0002\u00b8\u00b9\t\u0003\u0002\u0002\u00b9\u001f\u0003\u0002",
    "\u0002\u0002\u00ba\u00bb\u0005\u0014\u000b\u0002\u00bb!\u0003\u0002",
    "\u0002\u0002\u00bc\u00bd\u0007\u0005\u0002\u0002\u00bd\u00c6\u0007\u0006",
    "\u0002\u0002\u00be\u00bf\u0007\u0005\u0002\u0002\u00bf\u00c1\u0005$",
    "\u0013\u0002\u00c0\u00c2\u0007\f\u0002\u0002\u00c1\u00c0\u0003\u0002",
    "\u0002\u0002\u00c1\u00c2\u0003\u0002\u0002\u0002\u00c2\u00c3\u0003\u0002",
    "\u0002\u0002\u00c3\u00c4\u0007\u0006\u0002\u0002\u00c4\u00c6\u0003\u0002",
    "\u0002\u0002\u00c5\u00bc\u0003\u0002\u0002\u0002\u00c5\u00be\u0003\u0002",
    "\u0002\u0002\u00c6#\u0003\u0002\u0002\u0002\u00c7\u00c9\u0007\n\u0002",
    "\u0002\u00c8\u00c7\u0003\u0002\u0002\u0002\u00c8\u00c9\u0003\u0002\u0002",
    "\u0002\u00c9\u00ca\u0003\u0002\u0002\u0002\u00ca\u00d2\u0005.\u0018",
    "\u0002\u00cb\u00cd\u0007\f\u0002\u0002\u00cc\u00ce\u0007\n\u0002\u0002",
    "\u00cd\u00cc\u0003\u0002\u0002\u0002\u00cd\u00ce\u0003\u0002\u0002\u0002",
    "\u00ce\u00cf\u0003\u0002\u0002\u0002\u00cf\u00d1\u0005.\u0018\u0002",
    "\u00d0\u00cb\u0003\u0002\u0002\u0002\u00d1\u00d4\u0003\u0002\u0002\u0002",
    "\u00d2\u00d0\u0003\u0002\u0002\u0002\u00d2\u00d3\u0003\u0002\u0002\u0002",
    "\u00d3%\u0003\u0002\u0002\u0002\u00d4\u00d2\u0003\u0002\u0002\u0002",
    "\u00d5\u00d8\u0005 \u0011\u0002\u00d6\u00d8\u0005(\u0015\u0002\u00d7",
    "\u00d5\u0003\u0002\u0002\u0002\u00d7\u00d6\u0003\u0002\u0002\u0002\u00d8",
    "\'\u0003\u0002\u0002\u0002\u00d9\u00da\u0005*\u0016\u0002\u00da)\u0003",
    "\u0002\u0002\u0002\u00db\u00dc\u0005\u000e\b\u0002\u00dc+\u0003\u0002",
    "\u0002\u0002\u00dd\u00de\u0007(\u0002\u0002\u00de\u00df\u0005.\u0018",
    "\u0002\u00df-\u0003\u0002\u0002\u0002\u00e0\u00e1\u0005&\u0014\u0002",
    "\u00e1\u00e2\u0007(\u0002\u0002\u00e2\u00e3\u0005.\u0018\u0002\u00e3",
    "\u00ea\u0003\u0002\u0002\u0002\u00e4\u00e5\u0005&\u0014\u0002\u00e5",
    "\u00e6\u00050\u0019\u0002\u00e6\u00e7\u0005.\u0018\u0002\u00e7\u00ea",
    "\u0003\u0002\u0002\u0002\u00e8\u00ea\u0005&\u0014\u0002\u00e9\u00e0",
    "\u0003\u0002\u0002\u0002\u00e9\u00e4\u0003\u0002\u0002\u0002\u00e9\u00e8",
    "\u0003\u0002\u0002\u0002\u00ea/\u0003\u0002\u0002\u0002\u00eb\u00ec",
    "\t\u0004\u0002\u0002\u00ec1\u0003\u0002\u0002\u0002\u00ed\u00ee\u0005",
    "@!\u0002\u00ee3\u0003\u0002\u0002\u0002\u00ef\u00f0\u0005@!\u0002\u00f0",
    "5\u0003\u0002\u0002\u0002\u00f1\u00f2\u0005:\u001e\u0002\u00f2\u00f3",
    "\u0005\u0004\u0003\u0002\u00f3\u00f5\u0003\u0002\u0002\u0002\u00f4\u00f1",
    "\u0003\u0002\u0002\u0002\u00f5\u00f6\u0003\u0002\u0002\u0002\u00f6\u00f4",
    "\u0003\u0002\u0002\u0002\u00f6\u00f7\u0003\u0002\u0002\u0002\u00f77",
    "\u0003\u0002\u0002\u0002\u00f8\u00f9\u0005<\u001f\u0002\u00f9\u00fa",
    "\u0005\u0004\u0003\u0002\u00fa\u00fc\u0003\u0002\u0002\u0002\u00fb\u00f8",
    "\u0003\u0002\u0002\u0002\u00fc\u00fd\u0003\u0002\u0002\u0002\u00fd\u00fb",
    "\u0003\u0002\u0002\u0002\u00fd\u00fe\u0003\u0002\u0002\u0002\u00fe9",
    "\u0003\u0002\u0002\u0002\u00ff\u0102\u00052\u001a\u0002\u0100\u0102",
    "\u0005N(\u0002\u0101\u00ff\u0003\u0002\u0002\u0002\u0101\u0100\u0003",
    "\u0002\u0002\u0002\u0102;\u0003\u0002\u0002\u0002\u0103\u0106\u0005",
    "4\u001b\u0002\u0104\u0106\u0005N(\u0002\u0105\u0103\u0003\u0002\u0002",
    "\u0002\u0105\u0104\u0003\u0002\u0002\u0002\u0106=\u0003\u0002\u0002",
    "\u0002\u0107\u0108\u0007\u000b\u0002\u0002\u0108?\u0003\u0002\u0002",
    "\u0002\u0109\u010a\u0005\u0006\u0004\u0002\u010aA\u0003\u0002\u0002",
    "\u0002\u010b\u010c\u0005D#\u0002\u010cC\u0003\u0002\u0002\u0002\u010d",
    "\u010f\u0005\n\u0006\u0002\u010e\u0110\u0005,\u0017\u0002\u010f\u010e",
    "\u0003\u0002\u0002\u0002\u010f\u0110\u0003\u0002\u0002\u0002\u0110E",
    "\u0003\u0002\u0002\u0002\u0111\u0112\u0005H%\u0002\u0112\u0113\u0005",
    "J&\u0002\u0113\u0114\u0007\u000b\u0002\u0002\u0114G\u0003\u0002\u0002",
    "\u0002\u0115\u0116\t\u0005\u0002\u0002\u0116I\u0003\u0002\u0002\u0002",
    "\u0117\u011c\u0005L\'\u0002\u0118\u0119\u0007\f\u0002\u0002\u0119\u011b",
    "\u0005L\'\u0002\u011a\u0118\u0003\u0002\u0002\u0002\u011b\u011e\u0003",
    "\u0002\u0002\u0002\u011c\u011a\u0003\u0002\u0002\u0002\u011c\u011d\u0003",
    "\u0002\u0002\u0002\u011dK\u0003\u0002\u0002\u0002\u011e\u011c\u0003",
    "\u0002\u0002\u0002\u011f\u0121\u0005\n\u0006\u0002\u0120\u0122\u0005",
    ",\u0017\u0002\u0121\u0120\u0003\u0002\u0002\u0002\u0121\u0122\u0003",
    "\u0002\u0002\u0002\u0122M\u0003\u0002\u0002\u0002\u0123\u0126\u0005",
    "P)\u0002\u0124\u0126\u0005F$\u0002\u0125\u0123\u0003\u0002\u0002\u0002",
    "\u0125\u0124\u0003\u0002\u0002\u0002\u0126O\u0003\u0002\u0002\u0002",
    "\u0127\u0128\u0005R*\u0002\u0128Q\u0003\u0002\u0002\u0002\u0129\u012a",
    "\u0007L\u0002\u0002\u012a\u012b\u0005\n\u0006\u0002\u012b\u012c\u0007",
    "\u0005\u0002\u0002\u012c\u012d\u0005X-\u0002\u012d\u012e\u0007\u0006",
    "\u0002\u0002\u012e\u012f\u0007\u0004\u0002\u0002\u012f\u0130\u0005^",
    "0\u0002\u0130\u0131\u00079\u0002\u0002\u0131S\u0003\u0002\u0002\u0002",
    "\u0132\u0134\u0007L\u0002\u0002\u0133\u0135\u0005\n\u0006\u0002\u0134",
    "\u0133\u0003\u0002\u0002\u0002\u0134\u0135\u0003\u0002\u0002\u0002\u0135",
    "\u0136\u0003\u0002\u0002\u0002\u0136\u0137\u0007\u0005\u0002\u0002\u0137",
    "\u0138\u0005X-\u0002\u0138\u0139\u0007\u0006\u0002\u0002\u0139\u013a",
    "\u0007\u0004\u0002\u0002\u013a\u013b\u0005^0\u0002\u013b\u013c\u0007",
    "9\u0002\u0002\u013cU\u0003\u0002\u0002\u0002\u013d\u013e\u0005X-\u0002",
    "\u013eW\u0003\u0002\u0002\u0002\u013f\u0145\u0003\u0002\u0002\u0002",
    "\u0140\u0142\u0005Z.\u0002\u0141\u0143\u0007\f\u0002\u0002\u0142\u0141",
    "\u0003\u0002\u0002\u0002\u0142\u0143\u0003\u0002\u0002\u0002\u0143\u0145",
    "\u0003\u0002\u0002\u0002\u0144\u013f\u0003\u0002\u0002\u0002\u0144\u0140",
    "\u0003\u0002\u0002\u0002\u0145Y\u0003\u0002\u0002\u0002\u0146\u014b",
    "\u0005\\/\u0002\u0147\u0148\u0007\f\u0002\u0002\u0148\u014a\u0005\\",
    "/\u0002\u0149\u0147\u0003\u0002\u0002\u0002\u014a\u014d\u0003\u0002",
    "\u0002\u0002\u014b\u0149\u0003\u0002\u0002\u0002\u014b\u014c\u0003\u0002",
    "\u0002\u0002\u014c[\u0003\u0002\u0002\u0002\u014d\u014b\u0003\u0002",
    "\u0002\u0002\u014e\u014f\u0005B\"\u0002\u014f]\u0003\u0002\u0002\u0002",
    "\u0150\u0151\u0005`1\u0002\u0151_\u0003\u0002\u0002\u0002\u0152\u0154",
    "\u00058\u001d\u0002\u0153\u0152\u0003\u0002\u0002\u0002\u0153\u0154",
    "\u0003\u0002\u0002\u0002\u0154a\u0003\u0002\u0002\u0002\u0155\u015a",
    "\u0005d3\u0002\u0156\u015a\u0005f4\u0002\u0157\u015a\u0007:\u0002\u0002",
    "\u0158\u015a\u0007;\u0002\u0002\u0159\u0155\u0003\u0002\u0002\u0002",
    "\u0159\u0156\u0003\u0002\u0002\u0002\u0159\u0157\u0003\u0002\u0002\u0002",
    "\u0159\u0158\u0003\u0002\u0002\u0002\u015ac\u0003\u0002\u0002\u0002",
    "\u015b\u015c\t\u0006\u0002\u0002\u015ce\u0003\u0002\u0002\u0002\u015d",
    "\u015e\u0007^\u0002\u0002\u015eg\u0003\u0002\u0002\u0002\"iqx\u007f",
    "\u0084\u008d\u0094\u009a\u00a4\u00a8\u00af\u00c1\u00c5\u00c8\u00cd\u00d2",
    "\u00d7\u00e9\u00f6\u00fd\u0101\u0105\u010f\u011c\u0121\u0125\u0134\u0142",
    "\u0144\u014b\u0153\u0159"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, "'{'", "'('", "')'", "'['", "']'", "'.'", 
                     "'...'", "';'", "','", "'<'", "'>'", "'<='", "'>='", 
                     "'=='", "'!='", "'==='", "'!=='", "'+'", "'-'", "'*'", 
                     "'%'", "'**'", "'++'", "'--'", "'<<'", "'>>'", "'>>>'", 
                     "'&'", "'|'", "'^'", "'!'", "'~'", "'&&'", "'||'", 
                     "'?'", "':'", "'='", "'+='", "'-='", "'*='", "'%='", 
                     "'**='", "'<<='", "'>>='", "'>>>='", "'&='", "'|='", 
                     "'^='", "'=>'", null, "'/'", "'/='", null, "'}'", null, 
                     null, "'await'", "'break'", "'case'", "'catch'", "'class'", 
                     "'const'", "'continue'", "'debugger'", "'default'", 
                     "'delete'", "'do'", "'else'", "'export'", "'extends'", 
                     "'finally'", "'for'", "'function'", "'if'", "'import'", 
                     "'in'", "'instanceof'", "'new'", "'return'", "'super'", 
                     "'switch'", "'this'", "'throw'", "'try'", "'typeof'", 
                     "'var'", "'void'", "'while'", "'with'", "'yield'", 
                     "'enum'", "'null'", "'true'", "'false'", "'async'", 
                     "'let'" ];

var symbolicNames = [ null, "NumericLiteral", "OpenBrace", "OpenParen", 
                      "CloseParen", "OpenBracket", "CloseBracket", "Dot", 
                      "Spread", "SemiColon", "Comma", "LessThan", "GreaterThan", 
                      "LessThanEquals", "GreaterThanEquals", "Equals", "NotEquals", 
                      "IdentityEquals", "IdentityNotEquals", "Plus", "Minus", 
                      "Multiply", "Modulo", "Power", "PlusPlus", "MinusMinus", 
                      "LeftShiftArithmetic", "RightShiftArithmetic", "RightShiftLogical", 
                      "BitAnd", "BitOr", "BitXOr", "Not", "BitNot", "And", 
                      "Or", "QuestionMark", "Colon", "Assign", "PlusAssign", 
                      "MinusAssign", "MultiplyAssign", "ModuloAssign", "PowerAssign", 
                      "LeftShiftArithmeticAssign", "RightShiftArithmeticAssign", 
                      "RightShiftLogicalAssign", "BitAndAssign", "BitOrAssign", 
                      "BitXorAssign", "FatArrow", "Punctuator", "Divide", 
                      "DivideAssign", "DivPunctuator", "CloseBrace", "NullLiteral", 
                      "BooleanLiteral", "Await", "Break", "Case", "Catch", 
                      "Class", "Const", "Continue", "Debugger", "Default", 
                      "Delete", "Do", "Else", "Export", "Extends", "Finally", 
                      "For", "Function", "If", "Import", "In", "Instanceof", 
                      "New", "Return", "Super", "Switch", "This", "Throw", 
                      "Try", "Typeof", "Var", "Void", "While", "With", "Yield", 
                      "Enum", "Null", "True", "False", "Async", "Let", "StringLiteral", 
                      "BinaryIntegerLiteral", "OctalIntegerLiteral", "HexIntegerLiteral", 
                      "IdentifierName", "MultiLineComment", "SingleLineComment", 
                      "WhiteSpace", "LineTerminator", "LineTerminatorSequence" ];

var ruleNames =  [ "file", "eos", "expression_In", "identifierReference", 
                   "bindingIdentifier", "identifier", "primaryExpression", 
                   "literal", "coverParenthesizedExpressionAndArrowParameterList", 
                   "coverCallExpressionAndAsyncArrowHead", "objectLiteral", 
                   "propertyDefinitionList", "propertyDefinition", "propertyName", 
                   "literalPropertyName", "callExpression", "arguments", 
                   "argumentList", "leftHandSideExpression", "newExpression", 
                   "memberExpression", "initializer_In", "assignmentExpression_In", 
                   "assignmentOperator", "statement", "statement_Return", 
                   "statementList", "statementList_Return", "statementListItem", 
                   "statementListItem_Return", "emptyStatement", "expressionStatement", 
                   "bindingElement", "singleNameBinding", "lexicalDeclaration_In", 
                   "letOrConst", "bindingList_In", "lexicalBinding_In", 
                   "declaration", "hoistableDeclaration", "functionDeclaration", 
                   "functionExpression", "uniqueFormalParameters", "formalParameters", 
                   "formalParameterList", "formalParameter", "functionBody", 
                   "functionStatementList", "reservedWord", "keyword", "futureReservedWord" ];

function ECMAScriptPassParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;

	/**
	 * Returns true if, on the current index of the parser's
	 * token stream, a token exists on the HIDDEN channel which
	 * either is a line terminator, or is a multi line comment that
	 * contains a line terminator.
	 * @returns {Boolean}
	 */
	ECMAScriptPassParser.prototype.lineTerminatorAhead = function() {
	// ECMAScript® 2018 Language Specification - Section 5.1.2
	// Simple white space and single-line comments are discarded and do not appear
	// in the stream of input elements for the syntactic grammar. A MultiLineComment
	// (that is, a comment of the form /*…*/ regardless of whether it spans more
	// than one line) is likewise simply discarded if it contains no line
	// terminator; but if a MultiLineComment contains one or more line terminators,
	// then it is replaced by a single line terminator, which becomes part of the
	// stream of input elements for the syntactic grammar.
	  var possibleIndexEosToken = antlr4.Parser.prototype.getCurrentToken
	    .call(this).tokenIndex - 1;
	  var ahead = this._input.get(possibleIndexEosToken);

	  if (ahead.channel !== antlr4.Lexer.HIDDEN)
	    return false;

	  var text = ahead.text;
	  var type = ahead.type;

	  return (
	    type === ECMAScriptPassParser.MultiLineComment &&
	    text.indexOf('\r') !== -1 ||
	    text.indexOf('\n') !== -1 ||
	    text.indexOf('\u2028') !== -1 ||
	    text.indexOf('\u2029') !== -1
	  ) || (type === ECMAScriptPassParser.LineTerminator);
	};

    return this;
}

ECMAScriptPassParser.prototype = Object.create(antlr4.Parser.prototype);
ECMAScriptPassParser.prototype.constructor = ECMAScriptPassParser;

Object.defineProperty(ECMAScriptPassParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ECMAScriptPassParser.EOF = antlr4.Token.EOF;
ECMAScriptPassParser.NumericLiteral = 1;
ECMAScriptPassParser.OpenBrace = 2;
ECMAScriptPassParser.OpenParen = 3;
ECMAScriptPassParser.CloseParen = 4;
ECMAScriptPassParser.OpenBracket = 5;
ECMAScriptPassParser.CloseBracket = 6;
ECMAScriptPassParser.Dot = 7;
ECMAScriptPassParser.Spread = 8;
ECMAScriptPassParser.SemiColon = 9;
ECMAScriptPassParser.Comma = 10;
ECMAScriptPassParser.LessThan = 11;
ECMAScriptPassParser.GreaterThan = 12;
ECMAScriptPassParser.LessThanEquals = 13;
ECMAScriptPassParser.GreaterThanEquals = 14;
ECMAScriptPassParser.Equals = 15;
ECMAScriptPassParser.NotEquals = 16;
ECMAScriptPassParser.IdentityEquals = 17;
ECMAScriptPassParser.IdentityNotEquals = 18;
ECMAScriptPassParser.Plus = 19;
ECMAScriptPassParser.Minus = 20;
ECMAScriptPassParser.Multiply = 21;
ECMAScriptPassParser.Modulo = 22;
ECMAScriptPassParser.Power = 23;
ECMAScriptPassParser.PlusPlus = 24;
ECMAScriptPassParser.MinusMinus = 25;
ECMAScriptPassParser.LeftShiftArithmetic = 26;
ECMAScriptPassParser.RightShiftArithmetic = 27;
ECMAScriptPassParser.RightShiftLogical = 28;
ECMAScriptPassParser.BitAnd = 29;
ECMAScriptPassParser.BitOr = 30;
ECMAScriptPassParser.BitXOr = 31;
ECMAScriptPassParser.Not = 32;
ECMAScriptPassParser.BitNot = 33;
ECMAScriptPassParser.And = 34;
ECMAScriptPassParser.Or = 35;
ECMAScriptPassParser.QuestionMark = 36;
ECMAScriptPassParser.Colon = 37;
ECMAScriptPassParser.Assign = 38;
ECMAScriptPassParser.PlusAssign = 39;
ECMAScriptPassParser.MinusAssign = 40;
ECMAScriptPassParser.MultiplyAssign = 41;
ECMAScriptPassParser.ModuloAssign = 42;
ECMAScriptPassParser.PowerAssign = 43;
ECMAScriptPassParser.LeftShiftArithmeticAssign = 44;
ECMAScriptPassParser.RightShiftArithmeticAssign = 45;
ECMAScriptPassParser.RightShiftLogicalAssign = 46;
ECMAScriptPassParser.BitAndAssign = 47;
ECMAScriptPassParser.BitOrAssign = 48;
ECMAScriptPassParser.BitXorAssign = 49;
ECMAScriptPassParser.FatArrow = 50;
ECMAScriptPassParser.Punctuator = 51;
ECMAScriptPassParser.Divide = 52;
ECMAScriptPassParser.DivideAssign = 53;
ECMAScriptPassParser.DivPunctuator = 54;
ECMAScriptPassParser.CloseBrace = 55;
ECMAScriptPassParser.NullLiteral = 56;
ECMAScriptPassParser.BooleanLiteral = 57;
ECMAScriptPassParser.Await = 58;
ECMAScriptPassParser.Break = 59;
ECMAScriptPassParser.Case = 60;
ECMAScriptPassParser.Catch = 61;
ECMAScriptPassParser.Class = 62;
ECMAScriptPassParser.Const = 63;
ECMAScriptPassParser.Continue = 64;
ECMAScriptPassParser.Debugger = 65;
ECMAScriptPassParser.Default = 66;
ECMAScriptPassParser.Delete = 67;
ECMAScriptPassParser.Do = 68;
ECMAScriptPassParser.Else = 69;
ECMAScriptPassParser.Export = 70;
ECMAScriptPassParser.Extends = 71;
ECMAScriptPassParser.Finally = 72;
ECMAScriptPassParser.For = 73;
ECMAScriptPassParser.Function = 74;
ECMAScriptPassParser.If = 75;
ECMAScriptPassParser.Import = 76;
ECMAScriptPassParser.In = 77;
ECMAScriptPassParser.Instanceof = 78;
ECMAScriptPassParser.New = 79;
ECMAScriptPassParser.Return = 80;
ECMAScriptPassParser.Super = 81;
ECMAScriptPassParser.Switch = 82;
ECMAScriptPassParser.This = 83;
ECMAScriptPassParser.Throw = 84;
ECMAScriptPassParser.Try = 85;
ECMAScriptPassParser.Typeof = 86;
ECMAScriptPassParser.Var = 87;
ECMAScriptPassParser.Void = 88;
ECMAScriptPassParser.While = 89;
ECMAScriptPassParser.With = 90;
ECMAScriptPassParser.Yield = 91;
ECMAScriptPassParser.Enum = 92;
ECMAScriptPassParser.Null = 93;
ECMAScriptPassParser.True = 94;
ECMAScriptPassParser.False = 95;
ECMAScriptPassParser.Async = 96;
ECMAScriptPassParser.Let = 97;
ECMAScriptPassParser.StringLiteral = 98;
ECMAScriptPassParser.BinaryIntegerLiteral = 99;
ECMAScriptPassParser.OctalIntegerLiteral = 100;
ECMAScriptPassParser.HexIntegerLiteral = 101;
ECMAScriptPassParser.IdentifierName = 102;
ECMAScriptPassParser.MultiLineComment = 103;
ECMAScriptPassParser.SingleLineComment = 104;
ECMAScriptPassParser.WhiteSpace = 105;
ECMAScriptPassParser.LineTerminator = 106;
ECMAScriptPassParser.LineTerminatorSequence = 107;

ECMAScriptPassParser.RULE_file = 0;
ECMAScriptPassParser.RULE_eos = 1;
ECMAScriptPassParser.RULE_expression_In = 2;
ECMAScriptPassParser.RULE_identifierReference = 3;
ECMAScriptPassParser.RULE_bindingIdentifier = 4;
ECMAScriptPassParser.RULE_identifier = 5;
ECMAScriptPassParser.RULE_primaryExpression = 6;
ECMAScriptPassParser.RULE_literal = 7;
ECMAScriptPassParser.RULE_coverParenthesizedExpressionAndArrowParameterList = 8;
ECMAScriptPassParser.RULE_coverCallExpressionAndAsyncArrowHead = 9;
ECMAScriptPassParser.RULE_objectLiteral = 10;
ECMAScriptPassParser.RULE_propertyDefinitionList = 11;
ECMAScriptPassParser.RULE_propertyDefinition = 12;
ECMAScriptPassParser.RULE_propertyName = 13;
ECMAScriptPassParser.RULE_literalPropertyName = 14;
ECMAScriptPassParser.RULE_callExpression = 15;
ECMAScriptPassParser.RULE_arguments = 16;
ECMAScriptPassParser.RULE_argumentList = 17;
ECMAScriptPassParser.RULE_leftHandSideExpression = 18;
ECMAScriptPassParser.RULE_newExpression = 19;
ECMAScriptPassParser.RULE_memberExpression = 20;
ECMAScriptPassParser.RULE_initializer_In = 21;
ECMAScriptPassParser.RULE_assignmentExpression_In = 22;
ECMAScriptPassParser.RULE_assignmentOperator = 23;
ECMAScriptPassParser.RULE_statement = 24;
ECMAScriptPassParser.RULE_statement_Return = 25;
ECMAScriptPassParser.RULE_statementList = 26;
ECMAScriptPassParser.RULE_statementList_Return = 27;
ECMAScriptPassParser.RULE_statementListItem = 28;
ECMAScriptPassParser.RULE_statementListItem_Return = 29;
ECMAScriptPassParser.RULE_emptyStatement = 30;
ECMAScriptPassParser.RULE_expressionStatement = 31;
ECMAScriptPassParser.RULE_bindingElement = 32;
ECMAScriptPassParser.RULE_singleNameBinding = 33;
ECMAScriptPassParser.RULE_lexicalDeclaration_In = 34;
ECMAScriptPassParser.RULE_letOrConst = 35;
ECMAScriptPassParser.RULE_bindingList_In = 36;
ECMAScriptPassParser.RULE_lexicalBinding_In = 37;
ECMAScriptPassParser.RULE_declaration = 38;
ECMAScriptPassParser.RULE_hoistableDeclaration = 39;
ECMAScriptPassParser.RULE_functionDeclaration = 40;
ECMAScriptPassParser.RULE_functionExpression = 41;
ECMAScriptPassParser.RULE_uniqueFormalParameters = 42;
ECMAScriptPassParser.RULE_formalParameters = 43;
ECMAScriptPassParser.RULE_formalParameterList = 44;
ECMAScriptPassParser.RULE_formalParameter = 45;
ECMAScriptPassParser.RULE_functionBody = 46;
ECMAScriptPassParser.RULE_functionStatementList = 47;
ECMAScriptPassParser.RULE_reservedWord = 48;
ECMAScriptPassParser.RULE_keyword = 49;
ECMAScriptPassParser.RULE_futureReservedWord = 50;

function FileContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_file;
    return this;
}

FileContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FileContext.prototype.constructor = FileContext;

FileContext.prototype.EOF = function() {
    return this.getToken(ECMAScriptPassParser.EOF, 0);
};

FileContext.prototype.statementList = function() {
    return this.getTypedRuleContext(StatementListContext,0);
};

FileContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterFile(this);
	}
};

FileContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitFile(this);
	}
};




ECMAScriptPassParser.FileContext = FileContext;

ECMAScriptPassParser.prototype.file = function() {

    var localctx = new FileContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ECMAScriptPassParser.RULE_file);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 103;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScriptPassParser.NumericLiteral) | (1 << ECMAScriptPassParser.OpenBrace) | (1 << ECMAScriptPassParser.OpenParen))) !== 0) || ((((_la - 56)) & ~0x1f) == 0 && ((1 << (_la - 56)) & ((1 << (ECMAScriptPassParser.NullLiteral - 56)) | (1 << (ECMAScriptPassParser.BooleanLiteral - 56)) | (1 << (ECMAScriptPassParser.Await - 56)) | (1 << (ECMAScriptPassParser.Const - 56)) | (1 << (ECMAScriptPassParser.Function - 56)))) !== 0) || ((((_la - 91)) & ~0x1f) == 0 && ((1 << (_la - 91)) & ((1 << (ECMAScriptPassParser.Yield - 91)) | (1 << (ECMAScriptPassParser.Let - 91)) | (1 << (ECMAScriptPassParser.StringLiteral - 91)) | (1 << (ECMAScriptPassParser.IdentifierName - 91)))) !== 0)) {
            this.state = 102;
            this.statementList();
        }

        this.state = 105;
        this.match(ECMAScriptPassParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EosContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_eos;
    return this;
}

EosContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EosContext.prototype.constructor = EosContext;

EosContext.prototype.SemiColon = function() {
    return this.getToken(ECMAScriptPassParser.SemiColon, 0);
};

EosContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterEos(this);
	}
};

EosContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitEos(this);
	}
};




ECMAScriptPassParser.EosContext = EosContext;

ECMAScriptPassParser.prototype.eos = function() {

    var localctx = new EosContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ECMAScriptPassParser.RULE_eos);
    try {
        this.state = 111;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 107;
            this.match(ECMAScriptPassParser.SemiColon);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 108;
            if (!( this.lineTerminatorAhead())) {
                throw new antlr4.error.FailedPredicateException(this, "this.lineTerminatorAhead()");
            }
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 109;
            if (!( this._input.LT(1).type === ECMAScriptPassParser.EOF)) {
                throw new antlr4.error.FailedPredicateException(this, "this._input.LT(1).type === ECMAScriptPassParser.EOF");
            }
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 110;
            if (!( this._input.LT(1).type === ECMAScriptPassParser.CloseBrace)) {
                throw new antlr4.error.FailedPredicateException(this, "this._input.LT(1).type === ECMAScriptPassParser.CloseBrace");
            }
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Expression_InContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_expression_In;
    return this;
}

Expression_InContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Expression_InContext.prototype.constructor = Expression_InContext;

Expression_InContext.prototype.assignmentExpression_In = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AssignmentExpression_InContext);
    } else {
        return this.getTypedRuleContext(AssignmentExpression_InContext,i);
    }
};

Expression_InContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ECMAScriptPassParser.Comma);
    } else {
        return this.getToken(ECMAScriptPassParser.Comma, i);
    }
};


Expression_InContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterExpression_In(this);
	}
};

Expression_InContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitExpression_In(this);
	}
};




ECMAScriptPassParser.Expression_InContext = Expression_InContext;

ECMAScriptPassParser.prototype.expression_In = function() {

    var localctx = new Expression_InContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ECMAScriptPassParser.RULE_expression_In);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 113;
        this.assignmentExpression_In();
        this.state = 118;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 114;
                this.match(ECMAScriptPassParser.Comma);
                this.state = 115;
                this.assignmentExpression_In(); 
            }
            this.state = 120;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IdentifierReferenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_identifierReference;
    return this;
}

IdentifierReferenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierReferenceContext.prototype.constructor = IdentifierReferenceContext;

IdentifierReferenceContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

IdentifierReferenceContext.prototype.Yield = function() {
    return this.getToken(ECMAScriptPassParser.Yield, 0);
};

IdentifierReferenceContext.prototype.Await = function() {
    return this.getToken(ECMAScriptPassParser.Await, 0);
};

IdentifierReferenceContext.prototype.Multiply = function() {
    return this.getToken(ECMAScriptPassParser.Multiply, 0);
};

IdentifierReferenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterIdentifierReference(this);
	}
};

IdentifierReferenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitIdentifierReference(this);
	}
};




ECMAScriptPassParser.IdentifierReferenceContext = IdentifierReferenceContext;

ECMAScriptPassParser.prototype.identifierReference = function() {

    var localctx = new IdentifierReferenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, ECMAScriptPassParser.RULE_identifierReference);
    try {
        this.state = 125;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptPassParser.IdentifierName:
            this.enterOuterAlt(localctx, 1);
            this.state = 121;
            this.identifier();
            break;
        case ECMAScriptPassParser.Yield:
            this.enterOuterAlt(localctx, 2);
            this.state = 122;
            this.match(ECMAScriptPassParser.Yield);
            break;
        case ECMAScriptPassParser.Await:
            this.enterOuterAlt(localctx, 3);
            this.state = 123;
            this.match(ECMAScriptPassParser.Await);
            this.state = 124;
            this.match(ECMAScriptPassParser.Multiply);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BindingIdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_bindingIdentifier;
    return this;
}

BindingIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BindingIdentifierContext.prototype.constructor = BindingIdentifierContext;

BindingIdentifierContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

BindingIdentifierContext.prototype.Yield = function() {
    return this.getToken(ECMAScriptPassParser.Yield, 0);
};

BindingIdentifierContext.prototype.Await = function() {
    return this.getToken(ECMAScriptPassParser.Await, 0);
};

BindingIdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterBindingIdentifier(this);
	}
};

BindingIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitBindingIdentifier(this);
	}
};




ECMAScriptPassParser.BindingIdentifierContext = BindingIdentifierContext;

ECMAScriptPassParser.prototype.bindingIdentifier = function() {

    var localctx = new BindingIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, ECMAScriptPassParser.RULE_bindingIdentifier);
    try {
        this.state = 130;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptPassParser.IdentifierName:
            this.enterOuterAlt(localctx, 1);
            this.state = 127;
            this.identifier();
            break;
        case ECMAScriptPassParser.Yield:
            this.enterOuterAlt(localctx, 2);
            this.state = 128;
            this.match(ECMAScriptPassParser.Yield);
            break;
        case ECMAScriptPassParser.Await:
            this.enterOuterAlt(localctx, 3);
            this.state = 129;
            this.match(ECMAScriptPassParser.Await);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_identifier;
    return this;
}

IdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierContext.prototype.constructor = IdentifierContext;

IdentifierContext.prototype.IdentifierName = function() {
    return this.getToken(ECMAScriptPassParser.IdentifierName, 0);
};

IdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterIdentifier(this);
	}
};

IdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitIdentifier(this);
	}
};




ECMAScriptPassParser.IdentifierContext = IdentifierContext;

ECMAScriptPassParser.prototype.identifier = function() {

    var localctx = new IdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, ECMAScriptPassParser.RULE_identifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 132;
        this.match(ECMAScriptPassParser.IdentifierName);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PrimaryExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_primaryExpression;
    return this;
}

PrimaryExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrimaryExpressionContext.prototype.constructor = PrimaryExpressionContext;

PrimaryExpressionContext.prototype.identifierReference = function() {
    return this.getTypedRuleContext(IdentifierReferenceContext,0);
};

PrimaryExpressionContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

PrimaryExpressionContext.prototype.objectLiteral = function() {
    return this.getTypedRuleContext(ObjectLiteralContext,0);
};

PrimaryExpressionContext.prototype.functionExpression = function() {
    return this.getTypedRuleContext(FunctionExpressionContext,0);
};

PrimaryExpressionContext.prototype.coverParenthesizedExpressionAndArrowParameterList = function() {
    return this.getTypedRuleContext(CoverParenthesizedExpressionAndArrowParameterListContext,0);
};

PrimaryExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterPrimaryExpression(this);
	}
};

PrimaryExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitPrimaryExpression(this);
	}
};




ECMAScriptPassParser.PrimaryExpressionContext = PrimaryExpressionContext;

ECMAScriptPassParser.prototype.primaryExpression = function() {

    var localctx = new PrimaryExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, ECMAScriptPassParser.RULE_primaryExpression);
    try {
        this.state = 139;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptPassParser.Await:
        case ECMAScriptPassParser.Yield:
        case ECMAScriptPassParser.IdentifierName:
            this.enterOuterAlt(localctx, 1);
            this.state = 134;
            this.identifierReference();
            break;
        case ECMAScriptPassParser.NumericLiteral:
        case ECMAScriptPassParser.NullLiteral:
        case ECMAScriptPassParser.BooleanLiteral:
        case ECMAScriptPassParser.StringLiteral:
            this.enterOuterAlt(localctx, 2);
            this.state = 135;
            this.literal();
            break;
        case ECMAScriptPassParser.OpenBrace:
            this.enterOuterAlt(localctx, 3);
            this.state = 136;
            this.objectLiteral();
            break;
        case ECMAScriptPassParser.Function:
            this.enterOuterAlt(localctx, 4);
            this.state = 137;
            this.functionExpression();
            break;
        case ECMAScriptPassParser.OpenParen:
            this.enterOuterAlt(localctx, 5);
            this.state = 138;
            this.coverParenthesizedExpressionAndArrowParameterList();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_literal;
    return this;
}

LiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralContext.prototype.constructor = LiteralContext;

LiteralContext.prototype.NullLiteral = function() {
    return this.getToken(ECMAScriptPassParser.NullLiteral, 0);
};

LiteralContext.prototype.BooleanLiteral = function() {
    return this.getToken(ECMAScriptPassParser.BooleanLiteral, 0);
};

LiteralContext.prototype.NumericLiteral = function() {
    return this.getToken(ECMAScriptPassParser.NumericLiteral, 0);
};

LiteralContext.prototype.StringLiteral = function() {
    return this.getToken(ECMAScriptPassParser.StringLiteral, 0);
};

LiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterLiteral(this);
	}
};

LiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitLiteral(this);
	}
};




ECMAScriptPassParser.LiteralContext = LiteralContext;

ECMAScriptPassParser.prototype.literal = function() {

    var localctx = new LiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, ECMAScriptPassParser.RULE_literal);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 141;
        _la = this._input.LA(1);
        if(!(_la===ECMAScriptPassParser.NumericLiteral || _la===ECMAScriptPassParser.NullLiteral || _la===ECMAScriptPassParser.BooleanLiteral || _la===ECMAScriptPassParser.StringLiteral)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CoverParenthesizedExpressionAndArrowParameterListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_coverParenthesizedExpressionAndArrowParameterList;
    return this;
}

CoverParenthesizedExpressionAndArrowParameterListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CoverParenthesizedExpressionAndArrowParameterListContext.prototype.constructor = CoverParenthesizedExpressionAndArrowParameterListContext;

CoverParenthesizedExpressionAndArrowParameterListContext.prototype.OpenParen = function() {
    return this.getToken(ECMAScriptPassParser.OpenParen, 0);
};

CoverParenthesizedExpressionAndArrowParameterListContext.prototype.expression_In = function() {
    return this.getTypedRuleContext(Expression_InContext,0);
};

CoverParenthesizedExpressionAndArrowParameterListContext.prototype.CloseParen = function() {
    return this.getToken(ECMAScriptPassParser.CloseParen, 0);
};

CoverParenthesizedExpressionAndArrowParameterListContext.prototype.Comma = function() {
    return this.getToken(ECMAScriptPassParser.Comma, 0);
};

CoverParenthesizedExpressionAndArrowParameterListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterCoverParenthesizedExpressionAndArrowParameterList(this);
	}
};

CoverParenthesizedExpressionAndArrowParameterListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitCoverParenthesizedExpressionAndArrowParameterList(this);
	}
};




ECMAScriptPassParser.CoverParenthesizedExpressionAndArrowParameterListContext = CoverParenthesizedExpressionAndArrowParameterListContext;

ECMAScriptPassParser.prototype.coverParenthesizedExpressionAndArrowParameterList = function() {

    var localctx = new CoverParenthesizedExpressionAndArrowParameterListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, ECMAScriptPassParser.RULE_coverParenthesizedExpressionAndArrowParameterList);
    var _la = 0; // Token type
    try {
        this.state = 152;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 143;
            this.match(ECMAScriptPassParser.OpenParen);
            this.state = 144;
            this.expression_In();
            this.state = 146;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ECMAScriptPassParser.Comma) {
                this.state = 145;
                this.match(ECMAScriptPassParser.Comma);
            }

            this.state = 148;
            this.match(ECMAScriptPassParser.CloseParen);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 150;
            this.match(ECMAScriptPassParser.OpenParen);
            this.state = 151;
            this.match(ECMAScriptPassParser.CloseParen);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CoverCallExpressionAndAsyncArrowHeadContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_coverCallExpressionAndAsyncArrowHead;
    return this;
}

CoverCallExpressionAndAsyncArrowHeadContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CoverCallExpressionAndAsyncArrowHeadContext.prototype.constructor = CoverCallExpressionAndAsyncArrowHeadContext;

CoverCallExpressionAndAsyncArrowHeadContext.prototype.memberExpression = function() {
    return this.getTypedRuleContext(MemberExpressionContext,0);
};

CoverCallExpressionAndAsyncArrowHeadContext.prototype.arguments = function() {
    return this.getTypedRuleContext(ArgumentsContext,0);
};

CoverCallExpressionAndAsyncArrowHeadContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterCoverCallExpressionAndAsyncArrowHead(this);
	}
};

CoverCallExpressionAndAsyncArrowHeadContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitCoverCallExpressionAndAsyncArrowHead(this);
	}
};




ECMAScriptPassParser.CoverCallExpressionAndAsyncArrowHeadContext = CoverCallExpressionAndAsyncArrowHeadContext;

ECMAScriptPassParser.prototype.coverCallExpressionAndAsyncArrowHead = function() {

    var localctx = new CoverCallExpressionAndAsyncArrowHeadContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, ECMAScriptPassParser.RULE_coverCallExpressionAndAsyncArrowHead);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 154;
        this.memberExpression();
        this.state = 155;
        this.arguments();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ObjectLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_objectLiteral;
    return this;
}

ObjectLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObjectLiteralContext.prototype.constructor = ObjectLiteralContext;

ObjectLiteralContext.prototype.OpenBrace = function() {
    return this.getToken(ECMAScriptPassParser.OpenBrace, 0);
};

ObjectLiteralContext.prototype.CloseBrace = function() {
    return this.getToken(ECMAScriptPassParser.CloseBrace, 0);
};

ObjectLiteralContext.prototype.propertyDefinitionList = function() {
    return this.getTypedRuleContext(PropertyDefinitionListContext,0);
};

ObjectLiteralContext.prototype.Comma = function() {
    return this.getToken(ECMAScriptPassParser.Comma, 0);
};

ObjectLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterObjectLiteral(this);
	}
};

ObjectLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitObjectLiteral(this);
	}
};




ECMAScriptPassParser.ObjectLiteralContext = ObjectLiteralContext;

ECMAScriptPassParser.prototype.objectLiteral = function() {

    var localctx = new ObjectLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, ECMAScriptPassParser.RULE_objectLiteral);
    var _la = 0; // Token type
    try {
        this.state = 166;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 157;
            this.match(ECMAScriptPassParser.OpenBrace);
            this.state = 158;
            this.match(ECMAScriptPassParser.CloseBrace);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 159;
            this.match(ECMAScriptPassParser.OpenBrace);
            this.state = 160;
            this.propertyDefinitionList();
            this.state = 162;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ECMAScriptPassParser.Comma) {
                this.state = 161;
                this.match(ECMAScriptPassParser.Comma);
            }

            this.state = 164;
            this.match(ECMAScriptPassParser.CloseBrace);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PropertyDefinitionListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_propertyDefinitionList;
    return this;
}

PropertyDefinitionListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertyDefinitionListContext.prototype.constructor = PropertyDefinitionListContext;

PropertyDefinitionListContext.prototype.propertyDefinition = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PropertyDefinitionContext);
    } else {
        return this.getTypedRuleContext(PropertyDefinitionContext,i);
    }
};

PropertyDefinitionListContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ECMAScriptPassParser.Comma);
    } else {
        return this.getToken(ECMAScriptPassParser.Comma, i);
    }
};


PropertyDefinitionListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterPropertyDefinitionList(this);
	}
};

PropertyDefinitionListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitPropertyDefinitionList(this);
	}
};




ECMAScriptPassParser.PropertyDefinitionListContext = PropertyDefinitionListContext;

ECMAScriptPassParser.prototype.propertyDefinitionList = function() {

    var localctx = new PropertyDefinitionListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, ECMAScriptPassParser.RULE_propertyDefinitionList);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 168;
        this.propertyDefinition();
        this.state = 173;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 169;
                this.match(ECMAScriptPassParser.Comma);
                this.state = 170;
                this.propertyDefinition(); 
            }
            this.state = 175;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PropertyDefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_propertyDefinition;
    return this;
}

PropertyDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertyDefinitionContext.prototype.constructor = PropertyDefinitionContext;

PropertyDefinitionContext.prototype.propertyName = function() {
    return this.getTypedRuleContext(PropertyNameContext,0);
};

PropertyDefinitionContext.prototype.Colon = function() {
    return this.getToken(ECMAScriptPassParser.Colon, 0);
};

PropertyDefinitionContext.prototype.assignmentExpression_In = function() {
    return this.getTypedRuleContext(AssignmentExpression_InContext,0);
};

PropertyDefinitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterPropertyDefinition(this);
	}
};

PropertyDefinitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitPropertyDefinition(this);
	}
};




ECMAScriptPassParser.PropertyDefinitionContext = PropertyDefinitionContext;

ECMAScriptPassParser.prototype.propertyDefinition = function() {

    var localctx = new PropertyDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, ECMAScriptPassParser.RULE_propertyDefinition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 176;
        this.propertyName();
        this.state = 177;
        this.match(ECMAScriptPassParser.Colon);
        this.state = 178;
        this.assignmentExpression_In();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PropertyNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_propertyName;
    return this;
}

PropertyNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertyNameContext.prototype.constructor = PropertyNameContext;

PropertyNameContext.prototype.literalPropertyName = function() {
    return this.getTypedRuleContext(LiteralPropertyNameContext,0);
};

PropertyNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterPropertyName(this);
	}
};

PropertyNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitPropertyName(this);
	}
};




ECMAScriptPassParser.PropertyNameContext = PropertyNameContext;

ECMAScriptPassParser.prototype.propertyName = function() {

    var localctx = new PropertyNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, ECMAScriptPassParser.RULE_propertyName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 180;
        this.literalPropertyName();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LiteralPropertyNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_literalPropertyName;
    return this;
}

LiteralPropertyNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralPropertyNameContext.prototype.constructor = LiteralPropertyNameContext;

LiteralPropertyNameContext.prototype.IdentifierName = function() {
    return this.getToken(ECMAScriptPassParser.IdentifierName, 0);
};

LiteralPropertyNameContext.prototype.StringLiteral = function() {
    return this.getToken(ECMAScriptPassParser.StringLiteral, 0);
};

LiteralPropertyNameContext.prototype.NumericLiteral = function() {
    return this.getToken(ECMAScriptPassParser.NumericLiteral, 0);
};

LiteralPropertyNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterLiteralPropertyName(this);
	}
};

LiteralPropertyNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitLiteralPropertyName(this);
	}
};




ECMAScriptPassParser.LiteralPropertyNameContext = LiteralPropertyNameContext;

ECMAScriptPassParser.prototype.literalPropertyName = function() {

    var localctx = new LiteralPropertyNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, ECMAScriptPassParser.RULE_literalPropertyName);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 182;
        _la = this._input.LA(1);
        if(!(_la===ECMAScriptPassParser.NumericLiteral || _la===ECMAScriptPassParser.StringLiteral || _la===ECMAScriptPassParser.IdentifierName)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CallExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_callExpression;
    return this;
}

CallExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CallExpressionContext.prototype.constructor = CallExpressionContext;

CallExpressionContext.prototype.coverCallExpressionAndAsyncArrowHead = function() {
    return this.getTypedRuleContext(CoverCallExpressionAndAsyncArrowHeadContext,0);
};

CallExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterCallExpression(this);
	}
};

CallExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitCallExpression(this);
	}
};




ECMAScriptPassParser.CallExpressionContext = CallExpressionContext;

ECMAScriptPassParser.prototype.callExpression = function() {

    var localctx = new CallExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, ECMAScriptPassParser.RULE_callExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 184;
        this.coverCallExpressionAndAsyncArrowHead();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArgumentsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_arguments;
    return this;
}

ArgumentsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgumentsContext.prototype.constructor = ArgumentsContext;

ArgumentsContext.prototype.OpenParen = function() {
    return this.getToken(ECMAScriptPassParser.OpenParen, 0);
};

ArgumentsContext.prototype.CloseParen = function() {
    return this.getToken(ECMAScriptPassParser.CloseParen, 0);
};

ArgumentsContext.prototype.argumentList = function() {
    return this.getTypedRuleContext(ArgumentListContext,0);
};

ArgumentsContext.prototype.Comma = function() {
    return this.getToken(ECMAScriptPassParser.Comma, 0);
};

ArgumentsContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterArguments(this);
	}
};

ArgumentsContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitArguments(this);
	}
};




ECMAScriptPassParser.ArgumentsContext = ArgumentsContext;

ECMAScriptPassParser.prototype.arguments = function() {

    var localctx = new ArgumentsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, ECMAScriptPassParser.RULE_arguments);
    var _la = 0; // Token type
    try {
        this.state = 195;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 186;
            this.match(ECMAScriptPassParser.OpenParen);
            this.state = 187;
            this.match(ECMAScriptPassParser.CloseParen);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 188;
            this.match(ECMAScriptPassParser.OpenParen);
            this.state = 189;
            this.argumentList();
            this.state = 191;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ECMAScriptPassParser.Comma) {
                this.state = 190;
                this.match(ECMAScriptPassParser.Comma);
            }

            this.state = 193;
            this.match(ECMAScriptPassParser.CloseParen);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArgumentListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_argumentList;
    return this;
}

ArgumentListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgumentListContext.prototype.constructor = ArgumentListContext;

ArgumentListContext.prototype.assignmentExpression_In = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AssignmentExpression_InContext);
    } else {
        return this.getTypedRuleContext(AssignmentExpression_InContext,i);
    }
};

ArgumentListContext.prototype.Spread = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ECMAScriptPassParser.Spread);
    } else {
        return this.getToken(ECMAScriptPassParser.Spread, i);
    }
};


ArgumentListContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ECMAScriptPassParser.Comma);
    } else {
        return this.getToken(ECMAScriptPassParser.Comma, i);
    }
};


ArgumentListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterArgumentList(this);
	}
};

ArgumentListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitArgumentList(this);
	}
};




ECMAScriptPassParser.ArgumentListContext = ArgumentListContext;

ECMAScriptPassParser.prototype.argumentList = function() {

    var localctx = new ArgumentListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, ECMAScriptPassParser.RULE_argumentList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 198;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ECMAScriptPassParser.Spread) {
            this.state = 197;
            this.match(ECMAScriptPassParser.Spread);
        }

        this.state = 200;
        this.assignmentExpression_In();
        this.state = 208;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 201;
                this.match(ECMAScriptPassParser.Comma);
                this.state = 203;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(_la===ECMAScriptPassParser.Spread) {
                    this.state = 202;
                    this.match(ECMAScriptPassParser.Spread);
                }

                this.state = 205;
                this.assignmentExpression_In(); 
            }
            this.state = 210;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LeftHandSideExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_leftHandSideExpression;
    return this;
}

LeftHandSideExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LeftHandSideExpressionContext.prototype.constructor = LeftHandSideExpressionContext;

LeftHandSideExpressionContext.prototype.callExpression = function() {
    return this.getTypedRuleContext(CallExpressionContext,0);
};

LeftHandSideExpressionContext.prototype.newExpression = function() {
    return this.getTypedRuleContext(NewExpressionContext,0);
};

LeftHandSideExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterLeftHandSideExpression(this);
	}
};

LeftHandSideExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitLeftHandSideExpression(this);
	}
};




ECMAScriptPassParser.LeftHandSideExpressionContext = LeftHandSideExpressionContext;

ECMAScriptPassParser.prototype.leftHandSideExpression = function() {

    var localctx = new LeftHandSideExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, ECMAScriptPassParser.RULE_leftHandSideExpression);
    try {
        this.state = 213;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 211;
            this.callExpression();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 212;
            this.newExpression();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NewExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_newExpression;
    return this;
}

NewExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NewExpressionContext.prototype.constructor = NewExpressionContext;

NewExpressionContext.prototype.memberExpression = function() {
    return this.getTypedRuleContext(MemberExpressionContext,0);
};

NewExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterNewExpression(this);
	}
};

NewExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitNewExpression(this);
	}
};




ECMAScriptPassParser.NewExpressionContext = NewExpressionContext;

ECMAScriptPassParser.prototype.newExpression = function() {

    var localctx = new NewExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, ECMAScriptPassParser.RULE_newExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 215;
        this.memberExpression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MemberExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_memberExpression;
    return this;
}

MemberExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MemberExpressionContext.prototype.constructor = MemberExpressionContext;

MemberExpressionContext.prototype.primaryExpression = function() {
    return this.getTypedRuleContext(PrimaryExpressionContext,0);
};

MemberExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterMemberExpression(this);
	}
};

MemberExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitMemberExpression(this);
	}
};




ECMAScriptPassParser.MemberExpressionContext = MemberExpressionContext;

ECMAScriptPassParser.prototype.memberExpression = function() {

    var localctx = new MemberExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, ECMAScriptPassParser.RULE_memberExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 217;
        this.primaryExpression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Initializer_InContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_initializer_In;
    return this;
}

Initializer_InContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Initializer_InContext.prototype.constructor = Initializer_InContext;

Initializer_InContext.prototype.Assign = function() {
    return this.getToken(ECMAScriptPassParser.Assign, 0);
};

Initializer_InContext.prototype.assignmentExpression_In = function() {
    return this.getTypedRuleContext(AssignmentExpression_InContext,0);
};

Initializer_InContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterInitializer_In(this);
	}
};

Initializer_InContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitInitializer_In(this);
	}
};




ECMAScriptPassParser.Initializer_InContext = Initializer_InContext;

ECMAScriptPassParser.prototype.initializer_In = function() {

    var localctx = new Initializer_InContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, ECMAScriptPassParser.RULE_initializer_In);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 219;
        this.match(ECMAScriptPassParser.Assign);
        this.state = 220;
        this.assignmentExpression_In();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AssignmentExpression_InContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_assignmentExpression_In;
    return this;
}

AssignmentExpression_InContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignmentExpression_InContext.prototype.constructor = AssignmentExpression_InContext;


 
AssignmentExpression_InContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function LhsExpression_InContext(parser, ctx) {
	AssignmentExpression_InContext.call(this, parser);
    AssignmentExpression_InContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LhsExpression_InContext.prototype = Object.create(AssignmentExpression_InContext.prototype);
LhsExpression_InContext.prototype.constructor = LhsExpression_InContext;

ECMAScriptPassParser.LhsExpression_InContext = LhsExpression_InContext;

LhsExpression_InContext.prototype.leftHandSideExpression = function() {
    return this.getTypedRuleContext(LeftHandSideExpressionContext,0);
};
LhsExpression_InContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterLhsExpression_In(this);
	}
};

LhsExpression_InContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitLhsExpression_In(this);
	}
};


function AssignExpression_InContext(parser, ctx) {
	AssignmentExpression_InContext.call(this, parser);
    AssignmentExpression_InContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AssignExpression_InContext.prototype = Object.create(AssignmentExpression_InContext.prototype);
AssignExpression_InContext.prototype.constructor = AssignExpression_InContext;

ECMAScriptPassParser.AssignExpression_InContext = AssignExpression_InContext;

AssignExpression_InContext.prototype.leftHandSideExpression = function() {
    return this.getTypedRuleContext(LeftHandSideExpressionContext,0);
};

AssignExpression_InContext.prototype.Assign = function() {
    return this.getToken(ECMAScriptPassParser.Assign, 0);
};

AssignExpression_InContext.prototype.assignmentExpression_In = function() {
    return this.getTypedRuleContext(AssignmentExpression_InContext,0);
};
AssignExpression_InContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterAssignExpression_In(this);
	}
};

AssignExpression_InContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitAssignExpression_In(this);
	}
};


function AssignmentOperatorExpression_InContext(parser, ctx) {
	AssignmentExpression_InContext.call(this, parser);
    AssignmentExpression_InContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AssignmentOperatorExpression_InContext.prototype = Object.create(AssignmentExpression_InContext.prototype);
AssignmentOperatorExpression_InContext.prototype.constructor = AssignmentOperatorExpression_InContext;

ECMAScriptPassParser.AssignmentOperatorExpression_InContext = AssignmentOperatorExpression_InContext;

AssignmentOperatorExpression_InContext.prototype.leftHandSideExpression = function() {
    return this.getTypedRuleContext(LeftHandSideExpressionContext,0);
};

AssignmentOperatorExpression_InContext.prototype.assignmentOperator = function() {
    return this.getTypedRuleContext(AssignmentOperatorContext,0);
};

AssignmentOperatorExpression_InContext.prototype.assignmentExpression_In = function() {
    return this.getTypedRuleContext(AssignmentExpression_InContext,0);
};
AssignmentOperatorExpression_InContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterAssignmentOperatorExpression_In(this);
	}
};

AssignmentOperatorExpression_InContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitAssignmentOperatorExpression_In(this);
	}
};



ECMAScriptPassParser.AssignmentExpression_InContext = AssignmentExpression_InContext;

ECMAScriptPassParser.prototype.assignmentExpression_In = function() {

    var localctx = new AssignmentExpression_InContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, ECMAScriptPassParser.RULE_assignmentExpression_In);
    try {
        this.state = 231;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
        switch(la_) {
        case 1:
            localctx = new AssignExpression_InContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 222;
            this.leftHandSideExpression();
            this.state = 223;
            this.match(ECMAScriptPassParser.Assign);
            this.state = 224;
            this.assignmentExpression_In();
            break;

        case 2:
            localctx = new AssignmentOperatorExpression_InContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 226;
            this.leftHandSideExpression();
            this.state = 227;
            this.assignmentOperator();
            this.state = 228;
            this.assignmentExpression_In();
            break;

        case 3:
            localctx = new LhsExpression_InContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 230;
            this.leftHandSideExpression();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AssignmentOperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_assignmentOperator;
    return this;
}

AssignmentOperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignmentOperatorContext.prototype.constructor = AssignmentOperatorContext;

AssignmentOperatorContext.prototype.PlusAssign = function() {
    return this.getToken(ECMAScriptPassParser.PlusAssign, 0);
};

AssignmentOperatorContext.prototype.MinusAssign = function() {
    return this.getToken(ECMAScriptPassParser.MinusAssign, 0);
};

AssignmentOperatorContext.prototype.MultiplyAssign = function() {
    return this.getToken(ECMAScriptPassParser.MultiplyAssign, 0);
};

AssignmentOperatorContext.prototype.DivideAssign = function() {
    return this.getToken(ECMAScriptPassParser.DivideAssign, 0);
};

AssignmentOperatorContext.prototype.ModuloAssign = function() {
    return this.getToken(ECMAScriptPassParser.ModuloAssign, 0);
};

AssignmentOperatorContext.prototype.PowerAssign = function() {
    return this.getToken(ECMAScriptPassParser.PowerAssign, 0);
};

AssignmentOperatorContext.prototype.LeftShiftArithmeticAssign = function() {
    return this.getToken(ECMAScriptPassParser.LeftShiftArithmeticAssign, 0);
};

AssignmentOperatorContext.prototype.RightShiftArithmeticAssign = function() {
    return this.getToken(ECMAScriptPassParser.RightShiftArithmeticAssign, 0);
};

AssignmentOperatorContext.prototype.RightShiftLogicalAssign = function() {
    return this.getToken(ECMAScriptPassParser.RightShiftLogicalAssign, 0);
};

AssignmentOperatorContext.prototype.BitAndAssign = function() {
    return this.getToken(ECMAScriptPassParser.BitAndAssign, 0);
};

AssignmentOperatorContext.prototype.BitOrAssign = function() {
    return this.getToken(ECMAScriptPassParser.BitOrAssign, 0);
};

AssignmentOperatorContext.prototype.BitXorAssign = function() {
    return this.getToken(ECMAScriptPassParser.BitXorAssign, 0);
};

AssignmentOperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterAssignmentOperator(this);
	}
};

AssignmentOperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitAssignmentOperator(this);
	}
};




ECMAScriptPassParser.AssignmentOperatorContext = AssignmentOperatorContext;

ECMAScriptPassParser.prototype.assignmentOperator = function() {

    var localctx = new AssignmentOperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, ECMAScriptPassParser.RULE_assignmentOperator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 233;
        _la = this._input.LA(1);
        if(!(((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (ECMAScriptPassParser.PlusAssign - 39)) | (1 << (ECMAScriptPassParser.MinusAssign - 39)) | (1 << (ECMAScriptPassParser.MultiplyAssign - 39)) | (1 << (ECMAScriptPassParser.ModuloAssign - 39)) | (1 << (ECMAScriptPassParser.PowerAssign - 39)) | (1 << (ECMAScriptPassParser.LeftShiftArithmeticAssign - 39)) | (1 << (ECMAScriptPassParser.RightShiftArithmeticAssign - 39)) | (1 << (ECMAScriptPassParser.RightShiftLogicalAssign - 39)) | (1 << (ECMAScriptPassParser.BitAndAssign - 39)) | (1 << (ECMAScriptPassParser.BitOrAssign - 39)) | (1 << (ECMAScriptPassParser.BitXorAssign - 39)) | (1 << (ECMAScriptPassParser.DivideAssign - 39)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.expressionStatement = function() {
    return this.getTypedRuleContext(ExpressionStatementContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitStatement(this);
	}
};




ECMAScriptPassParser.StatementContext = StatementContext;

ECMAScriptPassParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, ECMAScriptPassParser.RULE_statement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 235;
        this.expressionStatement();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Statement_ReturnContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_statement_Return;
    return this;
}

Statement_ReturnContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Statement_ReturnContext.prototype.constructor = Statement_ReturnContext;

Statement_ReturnContext.prototype.expressionStatement = function() {
    return this.getTypedRuleContext(ExpressionStatementContext,0);
};

Statement_ReturnContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterStatement_Return(this);
	}
};

Statement_ReturnContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitStatement_Return(this);
	}
};




ECMAScriptPassParser.Statement_ReturnContext = Statement_ReturnContext;

ECMAScriptPassParser.prototype.statement_Return = function() {

    var localctx = new Statement_ReturnContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, ECMAScriptPassParser.RULE_statement_Return);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 237;
        this.expressionStatement();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_statementList;
    return this;
}

StatementListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementListContext.prototype.constructor = StatementListContext;

StatementListContext.prototype.statementListItem = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementListItemContext);
    } else {
        return this.getTypedRuleContext(StatementListItemContext,i);
    }
};

StatementListContext.prototype.eos = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EosContext);
    } else {
        return this.getTypedRuleContext(EosContext,i);
    }
};

StatementListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterStatementList(this);
	}
};

StatementListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitStatementList(this);
	}
};




ECMAScriptPassParser.StatementListContext = StatementListContext;

ECMAScriptPassParser.prototype.statementList = function() {

    var localctx = new StatementListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, ECMAScriptPassParser.RULE_statementList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 242; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 239;
            this.statementListItem();
            this.state = 240;
            this.eos();
            this.state = 244; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScriptPassParser.NumericLiteral) | (1 << ECMAScriptPassParser.OpenBrace) | (1 << ECMAScriptPassParser.OpenParen))) !== 0) || ((((_la - 56)) & ~0x1f) == 0 && ((1 << (_la - 56)) & ((1 << (ECMAScriptPassParser.NullLiteral - 56)) | (1 << (ECMAScriptPassParser.BooleanLiteral - 56)) | (1 << (ECMAScriptPassParser.Await - 56)) | (1 << (ECMAScriptPassParser.Const - 56)) | (1 << (ECMAScriptPassParser.Function - 56)))) !== 0) || ((((_la - 91)) & ~0x1f) == 0 && ((1 << (_la - 91)) & ((1 << (ECMAScriptPassParser.Yield - 91)) | (1 << (ECMAScriptPassParser.Let - 91)) | (1 << (ECMAScriptPassParser.StringLiteral - 91)) | (1 << (ECMAScriptPassParser.IdentifierName - 91)))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementList_ReturnContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_statementList_Return;
    return this;
}

StatementList_ReturnContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementList_ReturnContext.prototype.constructor = StatementList_ReturnContext;

StatementList_ReturnContext.prototype.statementListItem_Return = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementListItem_ReturnContext);
    } else {
        return this.getTypedRuleContext(StatementListItem_ReturnContext,i);
    }
};

StatementList_ReturnContext.prototype.eos = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EosContext);
    } else {
        return this.getTypedRuleContext(EosContext,i);
    }
};

StatementList_ReturnContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterStatementList_Return(this);
	}
};

StatementList_ReturnContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitStatementList_Return(this);
	}
};




ECMAScriptPassParser.StatementList_ReturnContext = StatementList_ReturnContext;

ECMAScriptPassParser.prototype.statementList_Return = function() {

    var localctx = new StatementList_ReturnContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, ECMAScriptPassParser.RULE_statementList_Return);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 249; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 246;
            this.statementListItem_Return();
            this.state = 247;
            this.eos();
            this.state = 251; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScriptPassParser.NumericLiteral) | (1 << ECMAScriptPassParser.OpenBrace) | (1 << ECMAScriptPassParser.OpenParen))) !== 0) || ((((_la - 56)) & ~0x1f) == 0 && ((1 << (_la - 56)) & ((1 << (ECMAScriptPassParser.NullLiteral - 56)) | (1 << (ECMAScriptPassParser.BooleanLiteral - 56)) | (1 << (ECMAScriptPassParser.Await - 56)) | (1 << (ECMAScriptPassParser.Const - 56)) | (1 << (ECMAScriptPassParser.Function - 56)))) !== 0) || ((((_la - 91)) & ~0x1f) == 0 && ((1 << (_la - 91)) & ((1 << (ECMAScriptPassParser.Yield - 91)) | (1 << (ECMAScriptPassParser.Let - 91)) | (1 << (ECMAScriptPassParser.StringLiteral - 91)) | (1 << (ECMAScriptPassParser.IdentifierName - 91)))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementListItemContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_statementListItem;
    return this;
}

StatementListItemContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementListItemContext.prototype.constructor = StatementListItemContext;

StatementListItemContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

StatementListItemContext.prototype.declaration = function() {
    return this.getTypedRuleContext(DeclarationContext,0);
};

StatementListItemContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterStatementListItem(this);
	}
};

StatementListItemContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitStatementListItem(this);
	}
};




ECMAScriptPassParser.StatementListItemContext = StatementListItemContext;

ECMAScriptPassParser.prototype.statementListItem = function() {

    var localctx = new StatementListItemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, ECMAScriptPassParser.RULE_statementListItem);
    try {
        this.state = 255;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 253;
            this.statement();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 254;
            this.declaration();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementListItem_ReturnContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_statementListItem_Return;
    return this;
}

StatementListItem_ReturnContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementListItem_ReturnContext.prototype.constructor = StatementListItem_ReturnContext;

StatementListItem_ReturnContext.prototype.statement_Return = function() {
    return this.getTypedRuleContext(Statement_ReturnContext,0);
};

StatementListItem_ReturnContext.prototype.declaration = function() {
    return this.getTypedRuleContext(DeclarationContext,0);
};

StatementListItem_ReturnContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterStatementListItem_Return(this);
	}
};

StatementListItem_ReturnContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitStatementListItem_Return(this);
	}
};




ECMAScriptPassParser.StatementListItem_ReturnContext = StatementListItem_ReturnContext;

ECMAScriptPassParser.prototype.statementListItem_Return = function() {

    var localctx = new StatementListItem_ReturnContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, ECMAScriptPassParser.RULE_statementListItem_Return);
    try {
        this.state = 259;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 257;
            this.statement_Return();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 258;
            this.declaration();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EmptyStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_emptyStatement;
    return this;
}

EmptyStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EmptyStatementContext.prototype.constructor = EmptyStatementContext;

EmptyStatementContext.prototype.SemiColon = function() {
    return this.getToken(ECMAScriptPassParser.SemiColon, 0);
};

EmptyStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterEmptyStatement(this);
	}
};

EmptyStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitEmptyStatement(this);
	}
};




ECMAScriptPassParser.EmptyStatementContext = EmptyStatementContext;

ECMAScriptPassParser.prototype.emptyStatement = function() {

    var localctx = new EmptyStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, ECMAScriptPassParser.RULE_emptyStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 261;
        this.match(ECMAScriptPassParser.SemiColon);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_expressionStatement;
    return this;
}

ExpressionStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionStatementContext.prototype.constructor = ExpressionStatementContext;

ExpressionStatementContext.prototype.expression_In = function() {
    return this.getTypedRuleContext(Expression_InContext,0);
};

ExpressionStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterExpressionStatement(this);
	}
};

ExpressionStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitExpressionStatement(this);
	}
};




ECMAScriptPassParser.ExpressionStatementContext = ExpressionStatementContext;

ECMAScriptPassParser.prototype.expressionStatement = function() {

    var localctx = new ExpressionStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, ECMAScriptPassParser.RULE_expressionStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 263;
        this.expression_In();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BindingElementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_bindingElement;
    return this;
}

BindingElementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BindingElementContext.prototype.constructor = BindingElementContext;

BindingElementContext.prototype.singleNameBinding = function() {
    return this.getTypedRuleContext(SingleNameBindingContext,0);
};

BindingElementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterBindingElement(this);
	}
};

BindingElementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitBindingElement(this);
	}
};




ECMAScriptPassParser.BindingElementContext = BindingElementContext;

ECMAScriptPassParser.prototype.bindingElement = function() {

    var localctx = new BindingElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, ECMAScriptPassParser.RULE_bindingElement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 265;
        this.singleNameBinding();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SingleNameBindingContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_singleNameBinding;
    return this;
}

SingleNameBindingContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SingleNameBindingContext.prototype.constructor = SingleNameBindingContext;

SingleNameBindingContext.prototype.bindingIdentifier = function() {
    return this.getTypedRuleContext(BindingIdentifierContext,0);
};

SingleNameBindingContext.prototype.initializer_In = function() {
    return this.getTypedRuleContext(Initializer_InContext,0);
};

SingleNameBindingContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterSingleNameBinding(this);
	}
};

SingleNameBindingContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitSingleNameBinding(this);
	}
};




ECMAScriptPassParser.SingleNameBindingContext = SingleNameBindingContext;

ECMAScriptPassParser.prototype.singleNameBinding = function() {

    var localctx = new SingleNameBindingContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, ECMAScriptPassParser.RULE_singleNameBinding);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 267;
        this.bindingIdentifier();
        this.state = 269;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ECMAScriptPassParser.Assign) {
            this.state = 268;
            this.initializer_In();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LexicalDeclaration_InContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_lexicalDeclaration_In;
    return this;
}

LexicalDeclaration_InContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LexicalDeclaration_InContext.prototype.constructor = LexicalDeclaration_InContext;

LexicalDeclaration_InContext.prototype.letOrConst = function() {
    return this.getTypedRuleContext(LetOrConstContext,0);
};

LexicalDeclaration_InContext.prototype.bindingList_In = function() {
    return this.getTypedRuleContext(BindingList_InContext,0);
};

LexicalDeclaration_InContext.prototype.SemiColon = function() {
    return this.getToken(ECMAScriptPassParser.SemiColon, 0);
};

LexicalDeclaration_InContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterLexicalDeclaration_In(this);
	}
};

LexicalDeclaration_InContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitLexicalDeclaration_In(this);
	}
};




ECMAScriptPassParser.LexicalDeclaration_InContext = LexicalDeclaration_InContext;

ECMAScriptPassParser.prototype.lexicalDeclaration_In = function() {

    var localctx = new LexicalDeclaration_InContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, ECMAScriptPassParser.RULE_lexicalDeclaration_In);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 271;
        this.letOrConst();
        this.state = 272;
        this.bindingList_In();
        this.state = 273;
        this.match(ECMAScriptPassParser.SemiColon);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LetOrConstContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_letOrConst;
    return this;
}

LetOrConstContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LetOrConstContext.prototype.constructor = LetOrConstContext;

LetOrConstContext.prototype.Let = function() {
    return this.getToken(ECMAScriptPassParser.Let, 0);
};

LetOrConstContext.prototype.Const = function() {
    return this.getToken(ECMAScriptPassParser.Const, 0);
};

LetOrConstContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterLetOrConst(this);
	}
};

LetOrConstContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitLetOrConst(this);
	}
};




ECMAScriptPassParser.LetOrConstContext = LetOrConstContext;

ECMAScriptPassParser.prototype.letOrConst = function() {

    var localctx = new LetOrConstContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, ECMAScriptPassParser.RULE_letOrConst);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 275;
        _la = this._input.LA(1);
        if(!(_la===ECMAScriptPassParser.Const || _la===ECMAScriptPassParser.Let)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BindingList_InContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_bindingList_In;
    return this;
}

BindingList_InContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BindingList_InContext.prototype.constructor = BindingList_InContext;

BindingList_InContext.prototype.lexicalBinding_In = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LexicalBinding_InContext);
    } else {
        return this.getTypedRuleContext(LexicalBinding_InContext,i);
    }
};

BindingList_InContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ECMAScriptPassParser.Comma);
    } else {
        return this.getToken(ECMAScriptPassParser.Comma, i);
    }
};


BindingList_InContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterBindingList_In(this);
	}
};

BindingList_InContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitBindingList_In(this);
	}
};




ECMAScriptPassParser.BindingList_InContext = BindingList_InContext;

ECMAScriptPassParser.prototype.bindingList_In = function() {

    var localctx = new BindingList_InContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, ECMAScriptPassParser.RULE_bindingList_In);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 277;
        this.lexicalBinding_In();
        this.state = 282;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ECMAScriptPassParser.Comma) {
            this.state = 278;
            this.match(ECMAScriptPassParser.Comma);
            this.state = 279;
            this.lexicalBinding_In();
            this.state = 284;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LexicalBinding_InContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_lexicalBinding_In;
    return this;
}

LexicalBinding_InContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LexicalBinding_InContext.prototype.constructor = LexicalBinding_InContext;

LexicalBinding_InContext.prototype.bindingIdentifier = function() {
    return this.getTypedRuleContext(BindingIdentifierContext,0);
};

LexicalBinding_InContext.prototype.initializer_In = function() {
    return this.getTypedRuleContext(Initializer_InContext,0);
};

LexicalBinding_InContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterLexicalBinding_In(this);
	}
};

LexicalBinding_InContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitLexicalBinding_In(this);
	}
};




ECMAScriptPassParser.LexicalBinding_InContext = LexicalBinding_InContext;

ECMAScriptPassParser.prototype.lexicalBinding_In = function() {

    var localctx = new LexicalBinding_InContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, ECMAScriptPassParser.RULE_lexicalBinding_In);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 285;
        this.bindingIdentifier();
        this.state = 287;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ECMAScriptPassParser.Assign) {
            this.state = 286;
            this.initializer_In();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_declaration;
    return this;
}

DeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclarationContext.prototype.constructor = DeclarationContext;

DeclarationContext.prototype.hoistableDeclaration = function() {
    return this.getTypedRuleContext(HoistableDeclarationContext,0);
};

DeclarationContext.prototype.lexicalDeclaration_In = function() {
    return this.getTypedRuleContext(LexicalDeclaration_InContext,0);
};

DeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterDeclaration(this);
	}
};

DeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitDeclaration(this);
	}
};




ECMAScriptPassParser.DeclarationContext = DeclarationContext;

ECMAScriptPassParser.prototype.declaration = function() {

    var localctx = new DeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, ECMAScriptPassParser.RULE_declaration);
    try {
        this.state = 291;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptPassParser.Function:
            this.enterOuterAlt(localctx, 1);
            this.state = 289;
            this.hoistableDeclaration();
            break;
        case ECMAScriptPassParser.Const:
        case ECMAScriptPassParser.Let:
            this.enterOuterAlt(localctx, 2);
            this.state = 290;
            this.lexicalDeclaration_In();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function HoistableDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_hoistableDeclaration;
    return this;
}

HoistableDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HoistableDeclarationContext.prototype.constructor = HoistableDeclarationContext;

HoistableDeclarationContext.prototype.functionDeclaration = function() {
    return this.getTypedRuleContext(FunctionDeclarationContext,0);
};

HoistableDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterHoistableDeclaration(this);
	}
};

HoistableDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitHoistableDeclaration(this);
	}
};




ECMAScriptPassParser.HoistableDeclarationContext = HoistableDeclarationContext;

ECMAScriptPassParser.prototype.hoistableDeclaration = function() {

    var localctx = new HoistableDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, ECMAScriptPassParser.RULE_hoistableDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 293;
        this.functionDeclaration();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_functionDeclaration;
    return this;
}

FunctionDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionDeclarationContext.prototype.constructor = FunctionDeclarationContext;

FunctionDeclarationContext.prototype.Function = function() {
    return this.getToken(ECMAScriptPassParser.Function, 0);
};

FunctionDeclarationContext.prototype.bindingIdentifier = function() {
    return this.getTypedRuleContext(BindingIdentifierContext,0);
};

FunctionDeclarationContext.prototype.OpenParen = function() {
    return this.getToken(ECMAScriptPassParser.OpenParen, 0);
};

FunctionDeclarationContext.prototype.formalParameters = function() {
    return this.getTypedRuleContext(FormalParametersContext,0);
};

FunctionDeclarationContext.prototype.CloseParen = function() {
    return this.getToken(ECMAScriptPassParser.CloseParen, 0);
};

FunctionDeclarationContext.prototype.OpenBrace = function() {
    return this.getToken(ECMAScriptPassParser.OpenBrace, 0);
};

FunctionDeclarationContext.prototype.functionBody = function() {
    return this.getTypedRuleContext(FunctionBodyContext,0);
};

FunctionDeclarationContext.prototype.CloseBrace = function() {
    return this.getToken(ECMAScriptPassParser.CloseBrace, 0);
};

FunctionDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterFunctionDeclaration(this);
	}
};

FunctionDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitFunctionDeclaration(this);
	}
};




ECMAScriptPassParser.FunctionDeclarationContext = FunctionDeclarationContext;

ECMAScriptPassParser.prototype.functionDeclaration = function() {

    var localctx = new FunctionDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, ECMAScriptPassParser.RULE_functionDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 295;
        this.match(ECMAScriptPassParser.Function);
        this.state = 296;
        this.bindingIdentifier();
        this.state = 297;
        this.match(ECMAScriptPassParser.OpenParen);
        this.state = 298;
        this.formalParameters();
        this.state = 299;
        this.match(ECMAScriptPassParser.CloseParen);
        this.state = 300;
        this.match(ECMAScriptPassParser.OpenBrace);
        this.state = 301;
        this.functionBody();
        this.state = 302;
        this.match(ECMAScriptPassParser.CloseBrace);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_functionExpression;
    return this;
}

FunctionExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionExpressionContext.prototype.constructor = FunctionExpressionContext;

FunctionExpressionContext.prototype.Function = function() {
    return this.getToken(ECMAScriptPassParser.Function, 0);
};

FunctionExpressionContext.prototype.OpenParen = function() {
    return this.getToken(ECMAScriptPassParser.OpenParen, 0);
};

FunctionExpressionContext.prototype.formalParameters = function() {
    return this.getTypedRuleContext(FormalParametersContext,0);
};

FunctionExpressionContext.prototype.CloseParen = function() {
    return this.getToken(ECMAScriptPassParser.CloseParen, 0);
};

FunctionExpressionContext.prototype.OpenBrace = function() {
    return this.getToken(ECMAScriptPassParser.OpenBrace, 0);
};

FunctionExpressionContext.prototype.functionBody = function() {
    return this.getTypedRuleContext(FunctionBodyContext,0);
};

FunctionExpressionContext.prototype.CloseBrace = function() {
    return this.getToken(ECMAScriptPassParser.CloseBrace, 0);
};

FunctionExpressionContext.prototype.bindingIdentifier = function() {
    return this.getTypedRuleContext(BindingIdentifierContext,0);
};

FunctionExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterFunctionExpression(this);
	}
};

FunctionExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitFunctionExpression(this);
	}
};




ECMAScriptPassParser.FunctionExpressionContext = FunctionExpressionContext;

ECMAScriptPassParser.prototype.functionExpression = function() {

    var localctx = new FunctionExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, ECMAScriptPassParser.RULE_functionExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 304;
        this.match(ECMAScriptPassParser.Function);
        this.state = 306;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ECMAScriptPassParser.Await || _la===ECMAScriptPassParser.Yield || _la===ECMAScriptPassParser.IdentifierName) {
            this.state = 305;
            this.bindingIdentifier();
        }

        this.state = 308;
        this.match(ECMAScriptPassParser.OpenParen);
        this.state = 309;
        this.formalParameters();
        this.state = 310;
        this.match(ECMAScriptPassParser.CloseParen);
        this.state = 311;
        this.match(ECMAScriptPassParser.OpenBrace);
        this.state = 312;
        this.functionBody();
        this.state = 313;
        this.match(ECMAScriptPassParser.CloseBrace);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function UniqueFormalParametersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_uniqueFormalParameters;
    return this;
}

UniqueFormalParametersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UniqueFormalParametersContext.prototype.constructor = UniqueFormalParametersContext;

UniqueFormalParametersContext.prototype.formalParameters = function() {
    return this.getTypedRuleContext(FormalParametersContext,0);
};

UniqueFormalParametersContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterUniqueFormalParameters(this);
	}
};

UniqueFormalParametersContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitUniqueFormalParameters(this);
	}
};




ECMAScriptPassParser.UniqueFormalParametersContext = UniqueFormalParametersContext;

ECMAScriptPassParser.prototype.uniqueFormalParameters = function() {

    var localctx = new UniqueFormalParametersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, ECMAScriptPassParser.RULE_uniqueFormalParameters);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 315;
        this.formalParameters();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FormalParametersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_formalParameters;
    return this;
}

FormalParametersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormalParametersContext.prototype.constructor = FormalParametersContext;

FormalParametersContext.prototype.formalParameterList = function() {
    return this.getTypedRuleContext(FormalParameterListContext,0);
};

FormalParametersContext.prototype.Comma = function() {
    return this.getToken(ECMAScriptPassParser.Comma, 0);
};

FormalParametersContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterFormalParameters(this);
	}
};

FormalParametersContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitFormalParameters(this);
	}
};




ECMAScriptPassParser.FormalParametersContext = FormalParametersContext;

ECMAScriptPassParser.prototype.formalParameters = function() {

    var localctx = new FormalParametersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, ECMAScriptPassParser.RULE_formalParameters);
    var _la = 0; // Token type
    try {
        this.state = 322;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptPassParser.EOF:
        case ECMAScriptPassParser.CloseParen:
            this.enterOuterAlt(localctx, 1);

            break;
        case ECMAScriptPassParser.Await:
        case ECMAScriptPassParser.Yield:
        case ECMAScriptPassParser.IdentifierName:
            this.enterOuterAlt(localctx, 2);
            this.state = 318;
            this.formalParameterList();
            this.state = 320;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ECMAScriptPassParser.Comma) {
                this.state = 319;
                this.match(ECMAScriptPassParser.Comma);
            }

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FormalParameterListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_formalParameterList;
    return this;
}

FormalParameterListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormalParameterListContext.prototype.constructor = FormalParameterListContext;

FormalParameterListContext.prototype.formalParameter = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FormalParameterContext);
    } else {
        return this.getTypedRuleContext(FormalParameterContext,i);
    }
};

FormalParameterListContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ECMAScriptPassParser.Comma);
    } else {
        return this.getToken(ECMAScriptPassParser.Comma, i);
    }
};


FormalParameterListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterFormalParameterList(this);
	}
};

FormalParameterListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitFormalParameterList(this);
	}
};




ECMAScriptPassParser.FormalParameterListContext = FormalParameterListContext;

ECMAScriptPassParser.prototype.formalParameterList = function() {

    var localctx = new FormalParameterListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, ECMAScriptPassParser.RULE_formalParameterList);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 324;
        this.formalParameter();
        this.state = 329;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,29,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 325;
                this.match(ECMAScriptPassParser.Comma);
                this.state = 326;
                this.formalParameter(); 
            }
            this.state = 331;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,29,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FormalParameterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_formalParameter;
    return this;
}

FormalParameterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormalParameterContext.prototype.constructor = FormalParameterContext;

FormalParameterContext.prototype.bindingElement = function() {
    return this.getTypedRuleContext(BindingElementContext,0);
};

FormalParameterContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterFormalParameter(this);
	}
};

FormalParameterContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitFormalParameter(this);
	}
};




ECMAScriptPassParser.FormalParameterContext = FormalParameterContext;

ECMAScriptPassParser.prototype.formalParameter = function() {

    var localctx = new FormalParameterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, ECMAScriptPassParser.RULE_formalParameter);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 332;
        this.bindingElement();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionBodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_functionBody;
    return this;
}

FunctionBodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionBodyContext.prototype.constructor = FunctionBodyContext;

FunctionBodyContext.prototype.functionStatementList = function() {
    return this.getTypedRuleContext(FunctionStatementListContext,0);
};

FunctionBodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterFunctionBody(this);
	}
};

FunctionBodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitFunctionBody(this);
	}
};




ECMAScriptPassParser.FunctionBodyContext = FunctionBodyContext;

ECMAScriptPassParser.prototype.functionBody = function() {

    var localctx = new FunctionBodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, ECMAScriptPassParser.RULE_functionBody);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 334;
        this.functionStatementList();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionStatementListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_functionStatementList;
    return this;
}

FunctionStatementListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionStatementListContext.prototype.constructor = FunctionStatementListContext;

FunctionStatementListContext.prototype.statementList_Return = function() {
    return this.getTypedRuleContext(StatementList_ReturnContext,0);
};

FunctionStatementListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterFunctionStatementList(this);
	}
};

FunctionStatementListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitFunctionStatementList(this);
	}
};




ECMAScriptPassParser.FunctionStatementListContext = FunctionStatementListContext;

ECMAScriptPassParser.prototype.functionStatementList = function() {

    var localctx = new FunctionStatementListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, ECMAScriptPassParser.RULE_functionStatementList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 337;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScriptPassParser.NumericLiteral) | (1 << ECMAScriptPassParser.OpenBrace) | (1 << ECMAScriptPassParser.OpenParen))) !== 0) || ((((_la - 56)) & ~0x1f) == 0 && ((1 << (_la - 56)) & ((1 << (ECMAScriptPassParser.NullLiteral - 56)) | (1 << (ECMAScriptPassParser.BooleanLiteral - 56)) | (1 << (ECMAScriptPassParser.Await - 56)) | (1 << (ECMAScriptPassParser.Const - 56)) | (1 << (ECMAScriptPassParser.Function - 56)))) !== 0) || ((((_la - 91)) & ~0x1f) == 0 && ((1 << (_la - 91)) & ((1 << (ECMAScriptPassParser.Yield - 91)) | (1 << (ECMAScriptPassParser.Let - 91)) | (1 << (ECMAScriptPassParser.StringLiteral - 91)) | (1 << (ECMAScriptPassParser.IdentifierName - 91)))) !== 0)) {
            this.state = 336;
            this.statementList_Return();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ReservedWordContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_reservedWord;
    return this;
}

ReservedWordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReservedWordContext.prototype.constructor = ReservedWordContext;

ReservedWordContext.prototype.keyword = function() {
    return this.getTypedRuleContext(KeywordContext,0);
};

ReservedWordContext.prototype.futureReservedWord = function() {
    return this.getTypedRuleContext(FutureReservedWordContext,0);
};

ReservedWordContext.prototype.NullLiteral = function() {
    return this.getToken(ECMAScriptPassParser.NullLiteral, 0);
};

ReservedWordContext.prototype.BooleanLiteral = function() {
    return this.getToken(ECMAScriptPassParser.BooleanLiteral, 0);
};

ReservedWordContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterReservedWord(this);
	}
};

ReservedWordContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitReservedWord(this);
	}
};




ECMAScriptPassParser.ReservedWordContext = ReservedWordContext;

ECMAScriptPassParser.prototype.reservedWord = function() {

    var localctx = new ReservedWordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, ECMAScriptPassParser.RULE_reservedWord);
    try {
        this.state = 343;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptPassParser.Await:
        case ECMAScriptPassParser.Break:
        case ECMAScriptPassParser.Case:
        case ECMAScriptPassParser.Catch:
        case ECMAScriptPassParser.Class:
        case ECMAScriptPassParser.Const:
        case ECMAScriptPassParser.Continue:
        case ECMAScriptPassParser.Debugger:
        case ECMAScriptPassParser.Default:
        case ECMAScriptPassParser.Delete:
        case ECMAScriptPassParser.Do:
        case ECMAScriptPassParser.Else:
        case ECMAScriptPassParser.Export:
        case ECMAScriptPassParser.Extends:
        case ECMAScriptPassParser.Finally:
        case ECMAScriptPassParser.For:
        case ECMAScriptPassParser.Function:
        case ECMAScriptPassParser.If:
        case ECMAScriptPassParser.Import:
        case ECMAScriptPassParser.In:
        case ECMAScriptPassParser.Instanceof:
        case ECMAScriptPassParser.New:
        case ECMAScriptPassParser.Return:
        case ECMAScriptPassParser.Super:
        case ECMAScriptPassParser.Switch:
        case ECMAScriptPassParser.This:
        case ECMAScriptPassParser.Throw:
        case ECMAScriptPassParser.Try:
        case ECMAScriptPassParser.Typeof:
        case ECMAScriptPassParser.Var:
        case ECMAScriptPassParser.Void:
        case ECMAScriptPassParser.While:
        case ECMAScriptPassParser.With:
        case ECMAScriptPassParser.Yield:
            this.enterOuterAlt(localctx, 1);
            this.state = 339;
            this.keyword();
            break;
        case ECMAScriptPassParser.Enum:
            this.enterOuterAlt(localctx, 2);
            this.state = 340;
            this.futureReservedWord();
            break;
        case ECMAScriptPassParser.NullLiteral:
            this.enterOuterAlt(localctx, 3);
            this.state = 341;
            this.match(ECMAScriptPassParser.NullLiteral);
            break;
        case ECMAScriptPassParser.BooleanLiteral:
            this.enterOuterAlt(localctx, 4);
            this.state = 342;
            this.match(ECMAScriptPassParser.BooleanLiteral);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function KeywordContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_keyword;
    return this;
}

KeywordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
KeywordContext.prototype.constructor = KeywordContext;

KeywordContext.prototype.Await = function() {
    return this.getToken(ECMAScriptPassParser.Await, 0);
};

KeywordContext.prototype.Break = function() {
    return this.getToken(ECMAScriptPassParser.Break, 0);
};

KeywordContext.prototype.Case = function() {
    return this.getToken(ECMAScriptPassParser.Case, 0);
};

KeywordContext.prototype.Catch = function() {
    return this.getToken(ECMAScriptPassParser.Catch, 0);
};

KeywordContext.prototype.Class = function() {
    return this.getToken(ECMAScriptPassParser.Class, 0);
};

KeywordContext.prototype.Const = function() {
    return this.getToken(ECMAScriptPassParser.Const, 0);
};

KeywordContext.prototype.Continue = function() {
    return this.getToken(ECMAScriptPassParser.Continue, 0);
};

KeywordContext.prototype.Debugger = function() {
    return this.getToken(ECMAScriptPassParser.Debugger, 0);
};

KeywordContext.prototype.Default = function() {
    return this.getToken(ECMAScriptPassParser.Default, 0);
};

KeywordContext.prototype.Delete = function() {
    return this.getToken(ECMAScriptPassParser.Delete, 0);
};

KeywordContext.prototype.Do = function() {
    return this.getToken(ECMAScriptPassParser.Do, 0);
};

KeywordContext.prototype.Else = function() {
    return this.getToken(ECMAScriptPassParser.Else, 0);
};

KeywordContext.prototype.Export = function() {
    return this.getToken(ECMAScriptPassParser.Export, 0);
};

KeywordContext.prototype.Extends = function() {
    return this.getToken(ECMAScriptPassParser.Extends, 0);
};

KeywordContext.prototype.Finally = function() {
    return this.getToken(ECMAScriptPassParser.Finally, 0);
};

KeywordContext.prototype.For = function() {
    return this.getToken(ECMAScriptPassParser.For, 0);
};

KeywordContext.prototype.Function = function() {
    return this.getToken(ECMAScriptPassParser.Function, 0);
};

KeywordContext.prototype.If = function() {
    return this.getToken(ECMAScriptPassParser.If, 0);
};

KeywordContext.prototype.Import = function() {
    return this.getToken(ECMAScriptPassParser.Import, 0);
};

KeywordContext.prototype.In = function() {
    return this.getToken(ECMAScriptPassParser.In, 0);
};

KeywordContext.prototype.Instanceof = function() {
    return this.getToken(ECMAScriptPassParser.Instanceof, 0);
};

KeywordContext.prototype.New = function() {
    return this.getToken(ECMAScriptPassParser.New, 0);
};

KeywordContext.prototype.Return = function() {
    return this.getToken(ECMAScriptPassParser.Return, 0);
};

KeywordContext.prototype.Super = function() {
    return this.getToken(ECMAScriptPassParser.Super, 0);
};

KeywordContext.prototype.Switch = function() {
    return this.getToken(ECMAScriptPassParser.Switch, 0);
};

KeywordContext.prototype.This = function() {
    return this.getToken(ECMAScriptPassParser.This, 0);
};

KeywordContext.prototype.Throw = function() {
    return this.getToken(ECMAScriptPassParser.Throw, 0);
};

KeywordContext.prototype.Try = function() {
    return this.getToken(ECMAScriptPassParser.Try, 0);
};

KeywordContext.prototype.Typeof = function() {
    return this.getToken(ECMAScriptPassParser.Typeof, 0);
};

KeywordContext.prototype.Var = function() {
    return this.getToken(ECMAScriptPassParser.Var, 0);
};

KeywordContext.prototype.Void = function() {
    return this.getToken(ECMAScriptPassParser.Void, 0);
};

KeywordContext.prototype.While = function() {
    return this.getToken(ECMAScriptPassParser.While, 0);
};

KeywordContext.prototype.With = function() {
    return this.getToken(ECMAScriptPassParser.With, 0);
};

KeywordContext.prototype.Yield = function() {
    return this.getToken(ECMAScriptPassParser.Yield, 0);
};

KeywordContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterKeyword(this);
	}
};

KeywordContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitKeyword(this);
	}
};




ECMAScriptPassParser.KeywordContext = KeywordContext;

ECMAScriptPassParser.prototype.keyword = function() {

    var localctx = new KeywordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 98, ECMAScriptPassParser.RULE_keyword);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 345;
        _la = this._input.LA(1);
        if(!(((((_la - 58)) & ~0x1f) == 0 && ((1 << (_la - 58)) & ((1 << (ECMAScriptPassParser.Await - 58)) | (1 << (ECMAScriptPassParser.Break - 58)) | (1 << (ECMAScriptPassParser.Case - 58)) | (1 << (ECMAScriptPassParser.Catch - 58)) | (1 << (ECMAScriptPassParser.Class - 58)) | (1 << (ECMAScriptPassParser.Const - 58)) | (1 << (ECMAScriptPassParser.Continue - 58)) | (1 << (ECMAScriptPassParser.Debugger - 58)) | (1 << (ECMAScriptPassParser.Default - 58)) | (1 << (ECMAScriptPassParser.Delete - 58)) | (1 << (ECMAScriptPassParser.Do - 58)) | (1 << (ECMAScriptPassParser.Else - 58)) | (1 << (ECMAScriptPassParser.Export - 58)) | (1 << (ECMAScriptPassParser.Extends - 58)) | (1 << (ECMAScriptPassParser.Finally - 58)) | (1 << (ECMAScriptPassParser.For - 58)) | (1 << (ECMAScriptPassParser.Function - 58)) | (1 << (ECMAScriptPassParser.If - 58)) | (1 << (ECMAScriptPassParser.Import - 58)) | (1 << (ECMAScriptPassParser.In - 58)) | (1 << (ECMAScriptPassParser.Instanceof - 58)) | (1 << (ECMAScriptPassParser.New - 58)) | (1 << (ECMAScriptPassParser.Return - 58)) | (1 << (ECMAScriptPassParser.Super - 58)) | (1 << (ECMAScriptPassParser.Switch - 58)) | (1 << (ECMAScriptPassParser.This - 58)) | (1 << (ECMAScriptPassParser.Throw - 58)) | (1 << (ECMAScriptPassParser.Try - 58)) | (1 << (ECMAScriptPassParser.Typeof - 58)) | (1 << (ECMAScriptPassParser.Var - 58)) | (1 << (ECMAScriptPassParser.Void - 58)) | (1 << (ECMAScriptPassParser.While - 58)))) !== 0) || _la===ECMAScriptPassParser.With || _la===ECMAScriptPassParser.Yield)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FutureReservedWordContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptPassParser.RULE_futureReservedWord;
    return this;
}

FutureReservedWordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FutureReservedWordContext.prototype.constructor = FutureReservedWordContext;

FutureReservedWordContext.prototype.Enum = function() {
    return this.getToken(ECMAScriptPassParser.Enum, 0);
};

FutureReservedWordContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.enterFutureReservedWord(this);
	}
};

FutureReservedWordContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptPassListener ) {
        listener.exitFutureReservedWord(this);
	}
};




ECMAScriptPassParser.FutureReservedWordContext = FutureReservedWordContext;

ECMAScriptPassParser.prototype.futureReservedWord = function() {

    var localctx = new FutureReservedWordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 100, ECMAScriptPassParser.RULE_futureReservedWord);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 347;
        this.match(ECMAScriptPassParser.Enum);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


ECMAScriptPassParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 1:
			return this.eos_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

ECMAScriptPassParser.prototype.eos_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.lineTerminatorAhead();
		case 1:
			return this._input.LT(1).type === ECMAScriptPassParser.EOF;
		case 2:
			return this._input.LT(1).type === ECMAScriptPassParser.CloseBrace;
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.ECMAScriptPassParser = ECMAScriptPassParser;
