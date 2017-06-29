// Generated from /home/jason/Projets/ecmascript-parser/src/static/antlr4/grammars/ECMAScriptPass.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by ECMAScriptPassParser.
function ECMAScriptPassListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

ECMAScriptPassListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
ECMAScriptPassListener.prototype.constructor = ECMAScriptPassListener;

// Enter a parse tree produced by ECMAScriptPassParser#file.
ECMAScriptPassListener.prototype.enterFile = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#file.
ECMAScriptPassListener.prototype.exitFile = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#eos.
ECMAScriptPassListener.prototype.enterEos = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#eos.
ECMAScriptPassListener.prototype.exitEos = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#expression_In.
ECMAScriptPassListener.prototype.enterExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#expression_In.
ECMAScriptPassListener.prototype.exitExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#identifierReference.
ECMAScriptPassListener.prototype.enterIdentifierReference = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#identifierReference.
ECMAScriptPassListener.prototype.exitIdentifierReference = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#bindingIdentifier.
ECMAScriptPassListener.prototype.enterBindingIdentifier = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#bindingIdentifier.
ECMAScriptPassListener.prototype.exitBindingIdentifier = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#identifier.
ECMAScriptPassListener.prototype.enterIdentifier = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#identifier.
ECMAScriptPassListener.prototype.exitIdentifier = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#primaryExpression.
ECMAScriptPassListener.prototype.enterPrimaryExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#primaryExpression.
ECMAScriptPassListener.prototype.exitPrimaryExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#literal.
ECMAScriptPassListener.prototype.enterLiteral = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#literal.
ECMAScriptPassListener.prototype.exitLiteral = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#coverParenthesizedExpressionAndArrowParameterList.
ECMAScriptPassListener.prototype.enterCoverParenthesizedExpressionAndArrowParameterList = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#coverParenthesizedExpressionAndArrowParameterList.
ECMAScriptPassListener.prototype.exitCoverParenthesizedExpressionAndArrowParameterList = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#coverCallExpressionAndAsyncArrowHead.
ECMAScriptPassListener.prototype.enterCoverCallExpressionAndAsyncArrowHead = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#coverCallExpressionAndAsyncArrowHead.
ECMAScriptPassListener.prototype.exitCoverCallExpressionAndAsyncArrowHead = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#arrayLiteral.
ECMAScriptPassListener.prototype.enterArrayLiteral = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#arrayLiteral.
ECMAScriptPassListener.prototype.exitArrayLiteral = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#elementList.
ECMAScriptPassListener.prototype.enterElementList = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#elementList.
ECMAScriptPassListener.prototype.exitElementList = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#elision.
ECMAScriptPassListener.prototype.enterElision = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#elision.
ECMAScriptPassListener.prototype.exitElision = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#spreadElement.
ECMAScriptPassListener.prototype.enterSpreadElement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#spreadElement.
ECMAScriptPassListener.prototype.exitSpreadElement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#objectLiteral.
ECMAScriptPassListener.prototype.enterObjectLiteral = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#objectLiteral.
ECMAScriptPassListener.prototype.exitObjectLiteral = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#propertyDefinitionList.
ECMAScriptPassListener.prototype.enterPropertyDefinitionList = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#propertyDefinitionList.
ECMAScriptPassListener.prototype.exitPropertyDefinitionList = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#propertyDefinition.
ECMAScriptPassListener.prototype.enterPropertyDefinition = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#propertyDefinition.
ECMAScriptPassListener.prototype.exitPropertyDefinition = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#propertyName.
ECMAScriptPassListener.prototype.enterPropertyName = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#propertyName.
ECMAScriptPassListener.prototype.exitPropertyName = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#literalPropertyName.
ECMAScriptPassListener.prototype.enterLiteralPropertyName = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#literalPropertyName.
ECMAScriptPassListener.prototype.exitLiteralPropertyName = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#callExpression.
ECMAScriptPassListener.prototype.enterCallExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#callExpression.
ECMAScriptPassListener.prototype.exitCallExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#arguments.
ECMAScriptPassListener.prototype.enterArguments = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#arguments.
ECMAScriptPassListener.prototype.exitArguments = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#argumentList.
ECMAScriptPassListener.prototype.enterArgumentList = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#argumentList.
ECMAScriptPassListener.prototype.exitArgumentList = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#leftHandSideExpression.
ECMAScriptPassListener.prototype.enterLeftHandSideExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#leftHandSideExpression.
ECMAScriptPassListener.prototype.exitLeftHandSideExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#newExpression.
ECMAScriptPassListener.prototype.enterNewExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#newExpression.
ECMAScriptPassListener.prototype.exitNewExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#memberExpression.
ECMAScriptPassListener.prototype.enterMemberExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#memberExpression.
ECMAScriptPassListener.prototype.exitMemberExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#initializer.
ECMAScriptPassListener.prototype.enterInitializer = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#initializer.
ECMAScriptPassListener.prototype.exitInitializer = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#initializer_In.
ECMAScriptPassListener.prototype.enterInitializer_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#initializer_In.
ECMAScriptPassListener.prototype.exitInitializer_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#assignExpression.
ECMAScriptPassListener.prototype.enterAssignExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#assignExpression.
ECMAScriptPassListener.prototype.exitAssignExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#assignmentOperatorExpression.
ECMAScriptPassListener.prototype.enterAssignmentOperatorExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#assignmentOperatorExpression.
ECMAScriptPassListener.prototype.exitAssignmentOperatorExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#lhsExpression.
ECMAScriptPassListener.prototype.enterLhsExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#lhsExpression.
ECMAScriptPassListener.prototype.exitLhsExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#assignExpression_In.
ECMAScriptPassListener.prototype.enterAssignExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#assignExpression_In.
ECMAScriptPassListener.prototype.exitAssignExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#assignmentOperatorExpression_In.
ECMAScriptPassListener.prototype.enterAssignmentOperatorExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#assignmentOperatorExpression_In.
ECMAScriptPassListener.prototype.exitAssignmentOperatorExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#lhsExpression_In.
ECMAScriptPassListener.prototype.enterLhsExpression_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#lhsExpression_In.
ECMAScriptPassListener.prototype.exitLhsExpression_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#assignmentOperator.
ECMAScriptPassListener.prototype.enterAssignmentOperator = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#assignmentOperator.
ECMAScriptPassListener.prototype.exitAssignmentOperator = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#statement.
ECMAScriptPassListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#statement.
ECMAScriptPassListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#statement_Return.
ECMAScriptPassListener.prototype.enterStatement_Return = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#statement_Return.
ECMAScriptPassListener.prototype.exitStatement_Return = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#statementList.
ECMAScriptPassListener.prototype.enterStatementList = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#statementList.
ECMAScriptPassListener.prototype.exitStatementList = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#statementList_Return.
ECMAScriptPassListener.prototype.enterStatementList_Return = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#statementList_Return.
ECMAScriptPassListener.prototype.exitStatementList_Return = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#statementListItem.
ECMAScriptPassListener.prototype.enterStatementListItem = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#statementListItem.
ECMAScriptPassListener.prototype.exitStatementListItem = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#statementListItem_Return.
ECMAScriptPassListener.prototype.enterStatementListItem_Return = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#statementListItem_Return.
ECMAScriptPassListener.prototype.exitStatementListItem_Return = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#emptyStatement.
ECMAScriptPassListener.prototype.enterEmptyStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#emptyStatement.
ECMAScriptPassListener.prototype.exitEmptyStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#expressionStatement.
ECMAScriptPassListener.prototype.enterExpressionStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#expressionStatement.
ECMAScriptPassListener.prototype.exitExpressionStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#bindingElement.
ECMAScriptPassListener.prototype.enterBindingElement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#bindingElement.
ECMAScriptPassListener.prototype.exitBindingElement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#singleNameBinding.
ECMAScriptPassListener.prototype.enterSingleNameBinding = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#singleNameBinding.
ECMAScriptPassListener.prototype.exitSingleNameBinding = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#lexicalDeclaration.
ECMAScriptPassListener.prototype.enterLexicalDeclaration = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#lexicalDeclaration.
ECMAScriptPassListener.prototype.exitLexicalDeclaration = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#lexicalDeclaration_In.
ECMAScriptPassListener.prototype.enterLexicalDeclaration_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#lexicalDeclaration_In.
ECMAScriptPassListener.prototype.exitLexicalDeclaration_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#letOrConst.
ECMAScriptPassListener.prototype.enterLetOrConst = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#letOrConst.
ECMAScriptPassListener.prototype.exitLetOrConst = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#bindingList.
ECMAScriptPassListener.prototype.enterBindingList = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#bindingList.
ECMAScriptPassListener.prototype.exitBindingList = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#bindingList_In.
ECMAScriptPassListener.prototype.enterBindingList_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#bindingList_In.
ECMAScriptPassListener.prototype.exitBindingList_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#lexicalBinding.
ECMAScriptPassListener.prototype.enterLexicalBinding = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#lexicalBinding.
ECMAScriptPassListener.prototype.exitLexicalBinding = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#lexicalBinding_In.
ECMAScriptPassListener.prototype.enterLexicalBinding_In = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#lexicalBinding_In.
ECMAScriptPassListener.prototype.exitLexicalBinding_In = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#declaration.
ECMAScriptPassListener.prototype.enterDeclaration = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#declaration.
ECMAScriptPassListener.prototype.exitDeclaration = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#hoistableDeclaration.
ECMAScriptPassListener.prototype.enterHoistableDeclaration = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#hoistableDeclaration.
ECMAScriptPassListener.prototype.exitHoistableDeclaration = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#iterationStatement.
ECMAScriptPassListener.prototype.enterIterationStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#iterationStatement.
ECMAScriptPassListener.prototype.exitIterationStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#forDeclaration.
ECMAScriptPassListener.prototype.enterForDeclaration = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#forDeclaration.
ECMAScriptPassListener.prototype.exitForDeclaration = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#forBinding.
ECMAScriptPassListener.prototype.enterForBinding = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#forBinding.
ECMAScriptPassListener.prototype.exitForBinding = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#breakableStatement.
ECMAScriptPassListener.prototype.enterBreakableStatement = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#breakableStatement.
ECMAScriptPassListener.prototype.exitBreakableStatement = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#functionDeclaration.
ECMAScriptPassListener.prototype.enterFunctionDeclaration = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#functionDeclaration.
ECMAScriptPassListener.prototype.exitFunctionDeclaration = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#functionExpression.
ECMAScriptPassListener.prototype.enterFunctionExpression = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#functionExpression.
ECMAScriptPassListener.prototype.exitFunctionExpression = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#uniqueFormalParameters.
ECMAScriptPassListener.prototype.enterUniqueFormalParameters = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#uniqueFormalParameters.
ECMAScriptPassListener.prototype.exitUniqueFormalParameters = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#formalParameters.
ECMAScriptPassListener.prototype.enterFormalParameters = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#formalParameters.
ECMAScriptPassListener.prototype.exitFormalParameters = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#formalParameterList.
ECMAScriptPassListener.prototype.enterFormalParameterList = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#formalParameterList.
ECMAScriptPassListener.prototype.exitFormalParameterList = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#formalParameter.
ECMAScriptPassListener.prototype.enterFormalParameter = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#formalParameter.
ECMAScriptPassListener.prototype.exitFormalParameter = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#functionBody.
ECMAScriptPassListener.prototype.enterFunctionBody = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#functionBody.
ECMAScriptPassListener.prototype.exitFunctionBody = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#functionStatementList.
ECMAScriptPassListener.prototype.enterFunctionStatementList = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#functionStatementList.
ECMAScriptPassListener.prototype.exitFunctionStatementList = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#reservedWord.
ECMAScriptPassListener.prototype.enterReservedWord = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#reservedWord.
ECMAScriptPassListener.prototype.exitReservedWord = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#keyword.
ECMAScriptPassListener.prototype.enterKeyword = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#keyword.
ECMAScriptPassListener.prototype.exitKeyword = function(ctx) {
};


// Enter a parse tree produced by ECMAScriptPassParser#futureReservedWord.
ECMAScriptPassListener.prototype.enterFutureReservedWord = function(ctx) {
};

// Exit a parse tree produced by ECMAScriptPassParser#futureReservedWord.
ECMAScriptPassListener.prototype.exitFutureReservedWord = function(ctx) {
};



exports.ECMAScriptPassListener = ECMAScriptPassListener;