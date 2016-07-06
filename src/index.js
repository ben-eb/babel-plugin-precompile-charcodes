export default function ({types: t}) {
    return {
        visitor: {
            MemberExpression (path) {
                if (
                    path.node.property.name !== 'charCodeAt' ||
                    path.node.object.type !== 'StringLiteral' ||
                    path.parent.arguments[0].value !== 0
                ) {
                    return;
                }
                path.parentPath.replaceWith(
                    t.numericLiteral(path.node.object.value.charCodeAt(0))
                );
            },
        },
    };
}
