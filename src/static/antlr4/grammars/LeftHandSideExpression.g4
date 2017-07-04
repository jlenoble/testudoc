/* Source: ECMAScript® 2018 Language Specification - Annex A-2 */

grammar LeftHandSideExpression;

// LeftHandSideExpression[Yield, Await]:
//    NewExpression[?Yield, ?Await]
//    CallExpression[?Yield, ?Await]
// NOTE: reordered to make (arguments) prevalent over parenthesizedExpression
leftHandSideExpression
: callExpression
| newExpression
;

// NewExpression[Yield, Await]:
//    MemberExpression[?Yield, ?Await]
//    newNewExpression[?Yield, ?Await]
newExpression
: memberExpression
| New newExpression
;

// MemberExpression[Yield, Await]:
//    PrimaryExpression[?Yield, ?Await]
//    MemberExpression[?Yield, ?Await] [ Expression[+In, ?Yield, ?Await] ]
//    MemberExpression[?Yield, ?Await] . IdentifierName
//    MemberExpression[?Yield, ?Await] TemplateLiteral[?Yield, ?Await]
//    SuperProperty[?Yield, ?Await]
//    MetaProperty
//    new MemberExpression[?Yield, ?Await] Arguments[?Yield, ?Await]
memberExpression
: primaryExpression
| memberExpression OpenBracket expression_In CloseBracket
| memberExpression Dot identifierName
| memberExpression templateLiteral
/*| superProperty
| metaProperty*/
| New memberExpression arguments
;
