/* Reserved words: ECMAScript® 2018 Language Specification - Annex A-1 */

lexer grammar ReservedWord;

Await       : 'await';

Break       : 'break';

Case        : 'case';
Catch       : 'catch';
Class       : 'class';
Const       : 'const';
Continue    : 'continue';

Debugger    : 'debugger';
Default     : 'default';
Delete      : 'delete';
Do          : 'do';

Else        : 'else';
Export      : 'export';
Extends     : 'extends';

Finally     : 'finally';
For         : 'for';
Function    : 'function';

If          : 'if';
Import      : 'import';
In          : 'in';
Instanceof  : 'instanceof';

New         : 'new';

Return      : 'return';

Super       : 'super';
Switch      : 'switch';

This        : 'this';
Throw       : 'throw';
Try         : 'try';
Typeof      : 'typeof';

Var         : 'var';
Void        : 'void';

While       : 'while';
With        : 'with';

Yield       : 'yield';

Enum        : 'enum';

// ReservedWord::
//    Keyword
//    FutureReservedWord
//    NullLiteral
//    BooleanLiteral
ReservedWord
: Keyword
| FutureReservedWord
| NullLiteral
| BooleanLiteral
;

// Keyword::
//     await
//     break
//     case catch class const continue
//     debugger default delete do
//     else export extends
//     finally for function
//     if import in instanceof
//     new
//     return
//     super switch
//     this throw try typeof
//     var void
//     while with
//     yield
Keyword
: Await
| Break
| Case      | Catch   | Class     | Const       | Continue
| Debugger  | Default | Delete    | Do
| Else      | Export  | Extends
| Finally   | For     | Function
| If        | Import  | In        | Instanceof
| New
| Return
| Super     | Switch
| This      | Throw   | Try       | Typeof
| Var       | Void
| While     | With
| Yield
;

// FutureReservedWord::
//    enum
FutureReservedWord
: Enum
;

// NullLiteral::
//    null
NullLiteral
: Null;

Null        : 'null';

// BooleanLiteral::
//    true
//    false
BooleanLiteral
: (True|False)
;

True        : 'true';
False       : 'false';

// Non keywords
Async       : 'async';
Let         : 'let';