class Position {
    constructor(element, canvasX, canvasY, offsetX, offsetY) {
        this.element = element;
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.relX = canvasX;
        this.relY = canvasY;
        this.absX = canvasX + offsetX;
        this.absY = canvasY + offsetY;
        this.dx = 2;
        this.dy = 2;

        // 为了让边界更准确，我们在这里获取一次宽度和高度
        // 但注意：刚创建时，浏览器可能还没渲染完，所以拿到的值可能不准
        this.textWidth = 60;  // 保留一个默认值作为后备
        this.textHeight = 25;

        // 尝试获取实际宽度
        setTimeout(() => {
            if (this.element && this.element.elt) {
                let rect = this.element.elt.getBoundingClientRect();
                this.textWidth = rect.width;
                this.textHeight = rect.height;
                console.log("文字实际尺寸:", this.textWidth, this.textHeight);
            }
        }, 50);  // 延迟50毫秒等浏览器渲染完

        this.element.position(this.absX, this.absY);
    }

    moveWords() {
        this.relX += this.dx;
        this.relY += this.dy;

        // 左边界
        if (this.relX < 0) {
            this.relX = 0;
            this.dx *= -1;
        }
        // 右边界 (使用实际宽度)
        if (this.relX > width - this.textWidth) {
            this.relX = width - this.textWidth;
            this.dx *= -1;
        }
        // 上边界
        if (this.relY < 0) {
            this.relY = 0;
            this.dy *= -1;
        }
        // 下边界 (使用实际高度)
        if (this.relY > height - this.textHeight) {
            this.relY = height - this.textHeight;
            this.dy *= -1;
        }

        this.absX = this.relX + this.offsetX;
        this.absY = this.relY + this.offsetY;
        this.element.position(this.absX, this.absY);
    }
}